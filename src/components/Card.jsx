import React from "react";
import { Text, Heading, Box, Flex } from "@chakra-ui/react";

const Card = ({ task, description, date }) => {
  return (
    <>
      <Box maxW="sm" borderWidth="3px" borderRadius="lg" overflow="hidden">
        <Heading fontSize={"2xl"} paddingTop="2">
          {task}
        </Heading>
        <Box p="6">
          <Text fontSize={"lg"}>{description}</Text>
          <Flex justifyContent="space-between" mt={2}>
            <Text>Created:</Text>
            <Text fontSize={"sm"} as="mark">
              {date}
            </Text>
          </Flex>
        </Box>
      </Box>
    </>
  );
};

export default Card;
