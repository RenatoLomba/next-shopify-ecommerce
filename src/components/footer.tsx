import React from 'react';
import NextLink from 'next/link';
import { Grid, Box, Text, Image, VStack } from '@chakra-ui/react';

export const Footer = () => {
  return (
    <Box bgColor="primary">
      <Grid
        templateColumns={{ base: '1fr', lg: 'repeat(3, 1fr)' }}
        color="white"
      >
        <Image src="https://cdn.shopify.com/s/files/1/0472/5705/9496/files/Bath_Bomb_-_Product-5_-_trans_1.png?v=1610123549" />
        <VStack p="2rem" justifyContent="space-around">
          <NextLink href="/" passHref>
            <a>The Green Blast</a>
          </NextLink>
          <NextLink href="/" passHref>
            <a>The Blue Berry</a>
          </NextLink>
          <NextLink href="/" passHref>
            <a>The Yellow Mellow</a>
          </NextLink>
        </VStack>
        <VStack p="2rem" justifyContent="space-around">
          <NextLink href="/" passHref>
            <a>About Us</a>
          </NextLink>
          <NextLink href="/" passHref>
            <a>Learn More</a>
          </NextLink>
          <NextLink href="/" passHref>
            <a>Sustainability</a>
          </NextLink>
        </VStack>
      </Grid>
      <Box>
        <Text
          textAlign="center"
          color="white"
          w="100%"
          borderTop="1px solid white"
          p="1rem"
        >
          &copy; Copyright www.workingwithshopify.com
        </Text>
      </Box>
    </Box>
  );
};
