import React from "react";
import {
  Box,
  Flex,
  FormControl,
  FormLabel,
  FormHelperText,
  Input,
} from "@chakra-ui/react";

const Form = () => {
  return (
    <FormControl>
      <FormLabel>Task</FormLabel>
      <FormHelperText>What stuff do you have to do?</FormHelperText>
      <Input id="task" />
      <FormLabel>Description</FormLabel>
      <FormHelperText>
        Tell us a little about what you need to do
      </FormHelperText>
      <Input id="task" />
    </FormControl>
  );
};

export default Form;
