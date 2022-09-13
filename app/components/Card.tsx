import { Box, Text } from "@chakra-ui/react";
import { FC } from "react";

interface IProps {
  title: string;
  content: string;
}

export const Card: FC<IProps> = ({ title, content }) => {
  return (
    <Box
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
