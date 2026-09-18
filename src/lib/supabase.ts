import { createClient } from "@supabase/supabase-js";

export interface SupabaseConfig {
  url: string;
  anonKey: string;
  serviceRoleKey: string;
}

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL ?? "";
const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY ?? "";
const supabaseServiceRoleKey = process.env.SUPABASE_SERVICE_ROLE_KEY ?? "";

export const supabaseConfig: SupabaseConfig = {
  url: supabaseUrl,
  anonKey: supabaseAnonKey,
  serviceRoleKey: supabaseServiceRoleKey,
};

export function getSupabaseClient() {
  if (!supabaseConfig.url || !supabaseConfig.anonKey) {
    return null;
  }

  return createClient(supabaseConfig.url, supabaseConfig.anonKey, {
    auth: {
      persistSession: true,
      autoRefreshToken: true,
      detectSessionInUrl: true,
    },
  });
}

export function getSupabaseAdminClient() {
  if (!supabaseConfig.url || !supabaseConfig.serviceRoleKey) {
    return null;
  }

  return createClient(supabaseConfig.url, supabaseConfig.serviceRoleKey, {
    auth: {
      persistSession: false,
      autoRefreshToken: false,
    },
  });
}

export interface MediaRecord {
  id: string;
  title: string;
  genre: string;
  quality: string;
  year: number;
  duration: string;
  rating: string;
  description: string;
  synopsis: string;
  director: string;
  image_url: string;
  price: number;
}

export interface NewsRecord {
  id: string;
  title: string;
  category: string;
  excerpt: string;
  image_url: string;
  published_at: string;
}

export interface MarketRecord {
  id: string;
  title: string;
  category: string;
  description: string;
  price: number;
  commission_rate: number;
  image_url: string;
}

export interface WalletLedgerRecord {
  id: string;
  user_id: string;
  title: string;
  entry_type: "credit" | "debit";
  amount: number;
  status: "completed" | "pending";
  created_at: string;
}

export interface SMMOrderRecord {
  id: string;
  user_id: string;
  service: string;
  quantity: number;
  total: number;
  status: "queued" | "processing" | "complete";
  created_at: string;
}
