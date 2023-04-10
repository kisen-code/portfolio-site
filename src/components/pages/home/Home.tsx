import { memo, useCallback, useEffect, VFC } from "react";
import {
  Box,
  Button,
  Center,
  Spinner,
  Stack,
  useDisclosure,
  Wrap,
  WrapItem
} from "@chakra-ui/react";

import { UserCard } from "../../organisms/user/UserCard";
import { useAllUsers } from "../../../hooks/useAllUsers";
import { UserDetailModal } from "../../organisms/modal/UserDetailModal";
import { useSelectUser } from "../../../hooks/useSelectUser";
import { useLoginUser } from "../../../hooks/providers/useLoginUserProvider";
import { Link } from "react-router-dom";

export const Home: VFC = memo(() => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const { getUsers, loading, users } = useAllUsers();
  const { onSelectUser, selectedUser } = useSelectUser();
  const { loginUser } = useLoginUser();

  useEffect(() => getUsers(), [getUsers]);

  const onClickUser = useCallback(
    (id: number) => {
      onSelectUser({ id, users, onOpen });
    },
    [users, onSelectUser, onOpen]
  );

  return (
    <>
      {loading ? (
        <Center h="100vh">
          <Spinner color="teal.200" />
        </Center>
      ) : (
        <>
          <Stack
            direction="row"
            spacing={4}
            align="center"
            m={5}
            borderBottom="1px solid #99bbbf"
            paddingBottom={3}
          >
            <Button colorScheme="teal" variant="solid">
              作品
            </Button>
          </Stack>
          <Wrap p={{ base: 4, md: 10 }}>
            {users.slice(0, 8).map((obj) => (
              <WrapItem key={obj.id} mx="auto">
                <UserCard
                  id={obj.id}
                  imageUrl="https://source.unsplash.com/random"
                  fullName={obj.name}
                  onClick={onClickUser}
                />
              </WrapItem>
            ))}
          </Wrap>
          <Box textAlign="center" my="4">
            <Link to="/home/user_management">もっとみる...</Link>
          </Box>
        </>
      )}
      <UserDetailModal
        isOpen={isOpen}
        isAdmin={loginUser?.isAdmin}
        onClose={onClose}
        user={selectedUser}
      />
    </>
  );
});
