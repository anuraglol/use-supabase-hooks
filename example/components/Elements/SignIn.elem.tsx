import { Button, Flex, Input, Text } from "@chakra-ui/react";
import { FC, useState } from "react";
import { MdOutlineEmail } from "react-icons/md";
import { FiTwitter } from "react-icons/fi";
import { TbBrandGoogle } from "react-icons/tb";
import { useAuth, useSupabase } from "use-supabase-auth";
import { toast } from "react-hot-toast";
import { useUser } from "../../hooks/useUser";
import UserElem from "./User.elem";

const SignIn: FC = () => {
  const [email, setEmail] = useState<string>("");
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const supabase = useSupabase(
    process.env.NEXT_PUBLIC_SUPABASE_URL!,
    process.env.NEXT_PUBLIC_SUPABASE_PK!
  );

  const { signIn } = useAuth(supabase);
  const { user } = useUser(supabase);

  return (
    <Flex
      bgColor="#07070899"
      px="10"
      py="12"
      rounded="lg"
      border="3px solid #BD8AFF9C"
      w="xl"
      direction="column"
      gap="4"
      alignItems="center"
    >
      {user ? (
        <UserElem client={supabase} />
      ) : (
        <>
          <form
            onSubmit={async (e) => {
              e.preventDefault();
              setIsLoading(true);
              const { error } = await signIn({ email });
              console.log(error);

              error
                ? toast.error("Error signing in")
                : toast.success("Check your email for sign in link");
              setIsLoading(false);
            }}
          >
            <Flex direction="column" gap="4" alignItems="center">
              <Input
                bg="#040108"
                h="12"
                w="md"
                rounded="xl"
                textColor="white"
                fontSize="lg"
                border="2px solid #fff"
                outline="none"
                placeholder="eddiemunson@st.com"
                _placeholder={{ fontSize: "lg" }}
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                isRequired
              />

              <Button
                bgColor="#A855F7"
                _hover={{
                  boxShadow: "2px 3px 3px rgba(124, 46, 224, 0.976561)",
                }}
                _active={{}}
                _focus={{}}
                textColor="white"
                fontWeight="500"
                w="40"
                display="flex"
                alignItems="center"
                gap="2"
                fontSize="17px"
                type="submit"
                isLoading={isLoading}
              >
                <MdOutlineEmail size={22} />
                Continue
              </Button>
            </Flex>
          </form>

          <Text fontSize="2xl" fontWeight="700" textColor="white">
            OR
          </Text>

          <Button
            bgColor="#A855F7"
            _active={{}}
            _focus={{}}
            textColor="white"
            fontWeight="500"
            w="72"
            display="flex"
            alignItems="center"
            gap="2"
            fontSize="17px"
            _hover={{
              boxShadow: "2px 3px 3px rgba(124, 46, 224, 0.976561)",
            }}
            onClick={async () => {
              const { error } = await signIn({ provider: "google" });
            }}
          >
            <TbBrandGoogle size={23} />
            Continue with Google
          </Button>

          <Button
            bgColor="#A855F7"
            _hover={{
              boxShadow: "2px 3px 3px rgba(124, 46, 224, 0.976561)",
            }}
            _active={{}}
            _focus={{}}
            textColor="white"
            fontWeight="500"
            w="72"
            display="flex"
            alignItems="center"
            gap="2"
            fontSize="17px"
            onClick={async () => {
              const { error } = await signIn({ provider: "twitter" });
            }}
          >
            <FiTwitter size={22} />
            Continue with Twitter
          </Button>
        </>
      )}
    </Flex>
  );
};

export default SignIn;
