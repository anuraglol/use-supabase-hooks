import type {
  signInProps,
  signUpProps,
  useAuthProps,
} from "../@types/useAuth.types";

const useAuth = ({ client }: useAuthProps) => {
  const signUp = async ({ email, password, redirectTo }: signUpProps) => {
    const { user, session, error } = await client.auth.signUp(
      {
        email: email,
        password: password,
      },
      { redirectTo: redirectTo && redirectTo }
    );

    return { user, session, error };
  };

  const signIn = async ({
    email,
    password,
    provider,
    redirectTo,
  }: signInProps) => {
    const { user, session, error } = await client.auth.signIn(
      email
        ? { email: email }
        : email && password
        ? { email: email, password: password }
        : {
            provider: provider,
          },
      { redirectTo: redirectTo && redirectTo }
    );
    return { user, session, error };
  };

  const signOut = async () => {
    const { error } = await client.auth.signOut();
    return { error };
  };

  return { signUp, signIn, signOut };
};

export { useAuth };
