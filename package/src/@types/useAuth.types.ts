import { Provider, SupabaseClient } from "@supabase/supabase-js";

interface useAuthProps {
  client: SupabaseClient;
  provider?: Provider;
  redirectTo?: string;
  email?: string;
  password?: string;
}

export type { useAuthProps };
