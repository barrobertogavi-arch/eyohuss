"use server";

import { revalidatePath } from "next/cache";
import { getSupabaseAdminClient } from "@/lib/supabase";

export async function createSMMOrder(formData: FormData) {
  const service = String(formData.get("service") ?? "");
  const quantityValue = Number(formData.get("quantity") ?? 0);
  const unitPriceValue = Number(formData.get("unitPrice") ?? 0);
  const userId = String(formData.get("userId") ?? "demo-user");

  const quantity = Number.isFinite(quantityValue) ? quantityValue : 0;
  const unitPrice = Number.isFinite(unitPriceValue) ? unitPriceValue : 0;
  const total = quantity * unitPrice;

  if (!service || quantity <= 0 || unitPrice <= 0) {
    return {
      ok: false,
      message: "Missing or invalid order data.",
    };
  }

  const adminClient = getSupabaseAdminClient();

  if (!adminClient) {
    revalidatePath("/smm-panel");
    revalidatePath("/wallet");

    return {
      ok: true,
      sandbox: true,
      total,
      orderId: `smm-${Date.now()}`,
      service,
      quantity,
      userId,
    };
  }

  const { data: insertedOrder, error: insertOrderError } = await adminClient
    .from("smm_orders")
    .insert({
      user_id: userId,
      service,
      quantity,
      total,
      status: "queued",
      created_at: new Date().toISOString(),
    })
    .select()
    .single();

  if (insertOrderError || !insertedOrder) {
    return {
      ok: false,
      message: insertOrderError?.message ?? "Unable to create SMM order.",
    };
  }

  const { error: walletInsertError } = await adminClient.from("wallet_ledger").insert({
    user_id: userId,
    title: `SMM order: ${service}`,
    entry_type: "debit",
    amount: total,
    status: "completed",
    created_at: new Date().toISOString(),
  });

  if (walletInsertError) {
    return {
      ok: false,
      message: walletInsertError.message,
    };
  }

  revalidatePath("/smm-panel");
  revalidatePath("/wallet");

  return {
    ok: true,
    sandbox: false,
    total,
    orderId: insertedOrder.id,
    service,
    quantity,
    userId,
  };
}
