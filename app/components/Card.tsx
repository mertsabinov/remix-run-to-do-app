import { Box, Text } from "@chakra-ui/react";

export const Card = () => {
  return (
    <Box marginLeft="5%" marginRight="5%">
      <Box
        backgroundColor="green.50"
        borderRadius="10px"
        marginTop="5%"
        padding="3%"
      >
        <Text fontWeight="bold">Card</Text>
        <Text>Card content</Text>
      </Box>
    </Box>
  );
};
