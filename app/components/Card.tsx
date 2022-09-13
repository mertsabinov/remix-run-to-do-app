import { Box, Text } from "@chakra-ui/react";
import { FC } from "react";

interface IProps {
  id: string;
  title: string;
  content: string;
}

export const Card: FC<IProps> = ({ id, title, content }) => {
  return (
    <Box
      id={id}
      backgroundColor="green.50"
      borderRadius="10px"
      marginTop="5%"
      padding="3%"
    >
      <Text fontWeight="bold">{title}</Text>
      <Text>{content}</Text>
    </Box>
  );
};
