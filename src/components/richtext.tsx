import React from 'react';
import { Box, Heading, Text, Center } from '@chakra-ui/react';

type RichTextProps = {
  heading?: string;
  text?: string;
};

export const RichText = ({ heading, text }: RichTextProps) => {
  return (
    <Box p="1rem">
      <Center display="flex" flexDir="column" textAlign="center">
        {heading && <Heading py="2.25rem">{heading}</Heading>}
        {text && <Text pb="2rem">{text}</Text>}
      </Center>
    </Box>
  );
};
