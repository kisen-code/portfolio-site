import { memo, useCallback, useEffect, VFC } from "react";
import {
  Center,
  Spinner,
  Tab,
  TabList,
  TabPanel,
  TabPanels,
  Tabs,
  useDisclosure,
  Wrap,
  WrapItem
} from "@chakra-ui/react";

import { UserCard } from "../../organisms/user/UserCard";
import { useAllUsers } from "../../../hooks/useAllUsers";
import { UserDetailModal } from "../../organisms/modal/UserDetailModal";
import { useSelectUser } from "../../../hooks/useSelectUser";
import { useLoginUser } from "../../../hooks/providers/useLoginUserProvider";

export const UserManagement: VFC = memo(() => {
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
          <Tabs variant="soft-rounded" colorScheme="green">
            <TabList borderBottom="1px solid #99bbbf" paddingBottom={3} m={5}>
              <Tab>ALL</Tab>
              <Tab>エンジニア</Tab>
              <Tab>動画編集</Tab>
              <Tab>デザイン</Tab>
            </TabList>
            <TabPanels>
              <TabPanel>
                <Wrap p={{ base: 4, md: 10 }}>
                  {users.map((obj) => (
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
              </TabPanel>
              <TabPanel>
                <Wrap p={{ base: 4, md: 10 }}>
                  {users.map((obj) => (
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
              </TabPanel>
              <TabPanel>
                <Wrap p={{ base: 4, md: 10 }}>
                  {users.map((obj) => (
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
              </TabPanel>
              <TabPanel>
                <Wrap p={{ base: 4, md: 10 }}>
                  {users.map((obj) => (
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
              </TabPanel>
            </TabPanels>
          </Tabs>
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
