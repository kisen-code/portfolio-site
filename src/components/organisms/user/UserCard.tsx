import { memo, VFC } from "react";
import { Box, Container, Flex, Image, Stack, Text } from "@chakra-ui/react";

type Props = {
  id: number;
  imageUrl: string;
  fullName: string;
  onClick: (id: number) => void;
};

export const UserCard: VFC<Props> = memo((props) => {
  const { id, imageUrl, fullName, onClick } = props;

  return (
    <Flex w="100%" flexWrap="wrap">
      <Container
        width={{ base: "180px", sm: "180px", md: "220px", lg: "250px" }}
        _hover={{ cursor: "pointer", opacity: 0.8 }}
        onClick={() => onClick(id)}
      >
        <Box>
          <Stack>
            <Image
              w="100%"
              h={{ base: "100px", sm: "100px", md: "125px", lg: "150px" }}
              src={imageUrl}
              objectFit="cover"
              shadow="md"
              borderRadius="10px"
              overflowY="hidden"
            />
          </Stack>
          <Box w="100%" paddingTop="10px" marginBottom="20px">
            <Text
              fontSize="lg"
              fontWeight="bold"
              color="rgb(51, 51, 51)"
              lineHeight="150%"
            >
              {fullName}
            </Text>
          </Box>
        </Box>
      </Container>
    </Flex>
  );
});
