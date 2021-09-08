import React from 'react';
import { Box, Text, Image, Center } from '@chakra-ui/react';
import { BathButton } from './bath-button';

export const Hero = () => {
  return (
    <Box bgColor="primary" w="100%" position="relative" h="70vh">
      <Image
        src="https://cdn.shopify.com/s/files/1/0472/5705/9496/files/Bath_Bomb_-_Product-4_-_nobg_1.png?v=1610055851.jpg"
        h="100%"
        m="auto"
        objectFit="contain"
        objectPosition={{ base: 'top', lg: 'center' }}
        className="fade-in"
      />
      <Text
        position="absolute"
        bottom="20%"
        w="100%"
        textAlign="center"
        color="white"
        fontWeight="bold"
        fontSize="4rem"
        className="tracking-in-expand"
      >
        Introducing Bath Bombs
      </Text>
      <Center>
        <BathButton text="Shop Button" position="absolute" bottom="10%" />
      </Center>
    </Box>
  );
};
