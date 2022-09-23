import { createClient } from "@supabase/supabase-js";

export const supabaseWithConnectionParams = (
  url: string = "",
  anon: string = ""
) => {
  return createClient(url, anon);
};
