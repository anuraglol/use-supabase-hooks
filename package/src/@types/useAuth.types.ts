import type { Provider } from "@supabase/supabase-js";

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

export type { signUpProps, signInProps };
