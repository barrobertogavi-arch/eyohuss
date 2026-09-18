"use server";

import { revalidatePath } from "next/cache";

export async function createSMMOrder(formData: FormData) {
  const service = String(formData.get("service") ?? "");
  const quantity = Number(formData.get("quantity") ?? 0);
  const unitPrice = Number(formData.get("unitPrice") ?? 0);
  const total = quantity * unitPrice;

  await new Promise((resolve) => setTimeout(resolve, 600));

  revalidatePath("/smm-panel");
  revalidatePath("/wallet");

  return {
    ok: true,
    total,
    orderId: `smm-${Date.now()}`,
    service,
    quantity,
  };
}
