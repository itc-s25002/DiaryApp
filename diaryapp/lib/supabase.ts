// lib/supabase.ts
import { createClient } from "@supabase/supabase-js";

const supabaseUrl = process.env.SUPABASE_URL!;
const supabasePublishableKey = process.env.SUPABASE_PUBLISHABLE_KEY!;

console.log("SUPABASE_URL exists:", !!supabaseUrl);
console.log("SUPABASE_PUBLISHABLE_KEY exists:", !!supabasePublishableKey);

if (!supabaseUrl || !supabasePublishableKey) {
  throw new Error("Supabase環境変数が設定されていません");
}

export const supabase = createClient(supabaseUrl, supabasePublishableKey);
