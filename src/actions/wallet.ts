"use server";

import { revalidatePath } from "next/cache";
import { getSupabaseAdminClient } from "@/lib/supabase";

export interface WalletTopUpPayload {
  userId: string;
  amount: number;
  source: string;
}

export async function createWalletTopUp(payload: WalletTopUpPayload) {
  const adminClient = getSupabaseAdminClient();

  if (!adminClient) {
    return {
      ok: true,
      sandbox: true,
      message: "Wallet top-up simulated because Supabase credentials are not configured.",
      amount: payload.amount,
    };
  }

  const { error } = await adminClient.from("wallet_ledger").insert({
    user_id: payload.userId,
    title: "Top-up deposit",
    entry_type: "credit",
    amount: payload.amount,
    status: "completed",
    created_at: new Date().toISOString(),
  });

  if (error) {
    return {
      ok: false,
      message: error.message,
    };
  }

  revalidatePath("/wallet");

  return {
    ok: true,
    sandbox: false,
    amount: payload.amount,
  };
}
