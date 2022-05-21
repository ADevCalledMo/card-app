import React from "react";
import { Flex } from "@chakra-ui/react";

const Container = ({ children }) => {
  return (
    <Flex
      as="main"
      justifyContent="center"
      alignItems="center"
      px={[2, 6, 6]}
      py={2}
      mt={10}
      mb={[0, 0, 8]}
      mx="auto"
    >
      {children}
    </Flex>
  );
};

export default Container;
