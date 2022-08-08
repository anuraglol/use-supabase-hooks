import { FC } from "react";
import { Flex } from "@chakra-ui/react";
import Image from "next/image";
import { useUser } from "../../hooks/useUser";
import { SupabaseClient } from "@supabase/supabase-js";

interface Props {
  client: SupabaseClient;
}

const UserElem: FC<Props> = ({ client }) => {
  const { user } = useUser(client);
  return (
    <Flex>
      <Image src={user?.user_metadata?.avatar_url} alt="avatar" />{" "}
    </Flex>
  );
};

export default UserElem;
