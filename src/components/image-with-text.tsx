import React from 'react';
import { Box, Flex, Text, Image, Heading } from '@chakra-ui/react';
import { BathButton } from './bath-button';

type ImageWithTextProps = {
  reverse?: boolean;
  image: string;
  heading?: string;
  text?: string;
};

export const ImageWithText = ({
  reverse,
  image,
  heading,
  text,
}: ImageWithTextProps) => {
  const reverseSection = reverse ? 'row-reverse' : 'row';
  return (
    <Box>
      <Flex flexDir={{ base: 'column', lg: reverseSection }} w="100%">
        <Image src={image} objectFit="cover" w={{ base: '100%', lg: '50%' }} />
        <Flex
          flexDir="column"
          justifyContent="center"
          alignItems="center"
          p="2rem"
          w={{ base: '100%', lg: '50%' }}
        >
          {heading && <Heading p="2rem">{heading}</Heading>}
          {text && <Text p="2rem">{text}</Text>}
          <BathButton text="Buy Now" />
        </Flex>
      </Flex>
    </Box>
  );
};
