import { Provider, SupabaseClient } from "@supabase/supabase-js";

interface useAuthProps {
  client: SupabaseClient;
}

interface signUpProps {
  email: string;
  password: string;
  redirectTo?: string;
}

interface signInProps {
  email?: string;
  password?: string;
  provider?: Provider;
  redirectTo?: string;
}

export type { useAuthProps, signUpProps, signInProps };
