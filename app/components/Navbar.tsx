import { HStack, Link } from "@chakra-ui/react";

export const Navbar = () => {
  return (
    <HStack background={"blue.50"} h="10vh" w="100%" justifyContent="center">
      <Link href="/">Home</Link>
      <Link href="/add">New</Link>
    </HStack>
  );
};
