import type { SupabaseClient, User } from "@supabase/supabase-js";
import { useState } from "react";

const useUser = (client: SupabaseClient) => {
  const [user, setUser] = useState<User | null>(null);
  const [loading, setIsLoading] = useState<boolean>(true);

  client.auth.onAuthStateChange((event) => {
    const user = client.auth.user();

    event === "SIGNED_IN"
      ? setUser(user)
      : event === "SIGNED_OUT"
      ? setUser(null)
      : null;

    setIsLoading(false);
  });

  return { user, loading };
};

export { useUser };
