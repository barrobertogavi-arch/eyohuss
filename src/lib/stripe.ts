import Stripe from "stripe";

const stripeSecretKey = process.env.STRIPE_SECRET_KEY ?? "";

export const stripe = stripeSecretKey
  ? new Stripe(stripeSecretKey, {
      apiVersion: "2024-06-20",
    })
  : null;

export interface StripeTransactionPayload {
  amount: number;
  currency: string;
  description: string;
  connectedAccountId?: string;
}

export async function createStripePaymentIntent(payload: StripeTransactionPayload) {
  if (!stripe) {
    return {
      ok: false,
      reason: "STRIPE_SECRET_KEY is not configured",
      clientSecret: null,
    };
  }

  const amountInCents = Math.round(payload.amount * 100);

  const intent = await stripe.paymentIntents.create({
    amount: amountInCents,
    currency: payload.currency,
    description: payload.description,
    automatic_payment_methods: {
      enabled: true,
    },
    transfer_data: payload.connectedAccountId
      ? {
          destination: payload.connectedAccountId,
        }
      : undefined,
  });

  return {
    ok: true,
    clientSecret: intent.client_secret,
    paymentIntentId: intent.id,
  };
}
