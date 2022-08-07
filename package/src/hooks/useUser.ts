import type { SupabaseClient, User } from "@supabase/supabase-js";
import { useEffect, useState } from "react";

const useUser = (client: SupabaseClient) => {
  const [user, setUser] = useState<User | null>(client.auth.user());
  const [loading, setIsLoading] = useState<boolean>(true);

  useEffect(() => {
    client.auth.onAuthStateChange((event) => {
      const user = client.auth.user();

      event === "SIGNED_IN"
        ? setUser(user)
        : event === "SIGNED_OUT"
        ? setUser(null)
        : null;

      setIsLoading(false);
    });
  }, [client]);

  return { user, loading };
};

export { useUser };
