import type { SupabaseClient, User } from "@supabase/supabase-js";
import { useState } from "react";

const useUser = (client: SupabaseClient) => {
  const [user, setUser] = useState<User | null>(null);
  const [isLoading, setIsLoading] = useState<boolean>(true);

  client.auth.onAuthStateChange((event, sesssion) => {
    const user = client.auth.user();

    setUser(user);
    setIsLoading(false);
  });

  return { user, isLoading };
};

export { useUser }