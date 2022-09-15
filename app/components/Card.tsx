import { Box, Button, HStack, Text } from "@chakra-ui/react";
import { FC } from "react";
import { DeleteIcon } from "@chakra-ui/icons";
import { API_URL } from "~/config";

interface IProps {
  id: string;
  title: string;
  content: string;
}

export const Card: FC<IProps> = ({ id, title, content }) => {
  const deleteItem = async (idx: string) => {
    const url = API_URL || "";
    const requestOptions = {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ id: idx }),
    };
    await fetch(url, requestOptions);
    window.location.reload();
  };
  return (
    <Box
      id={id}
      backgroundColor="green.50"
      borderRadius="10px"
      marginTop="5%"
      padding="3%"
    >
      <Text fontWeight="bold">{title}</Text>
      <HStack justifyContent="space-between">
        <Text w="90%">{content}</Text>
        <DeleteIcon
          onClick={() => deleteItem(id)}
          color="red.400"
          h={6}
          w={6}
          marginRight={4}
          _hover={{ background: "red.200", borderRadius: "25px" }}
        />
      </HStack>
    </Box>
  );
};
