import React from 'react';
import { GetStaticProps, NextPage } from 'next';
import NextLink from 'next/link';
import { Box, Grid, Text, Image } from '@chakra-ui/react';
import { Hero } from '../components/hero';
import { ImageWithText } from '../components/image-with-text';
import { RichText } from '../components/richtext';
import { client, Product } from '../context/shop-context';

type HomeProps = {
  products: Product[];
};

const Home: NextPage<HomeProps> = ({ products }) => {
  return (
    <Box>
      <Hero />
      <RichText
        heading="The relaxation you've been waiting for."
        text="Our Bath Bombs guarantee a fun, relaxing, and colorful night."
      />
      <Grid templateColumns={{ base: '1fr', lg: 'repeat(3, 1fr)' }}>
        {products.map((product) => (
          <NextLink
            key={product.id}
            href={`/products/${product.handle}`}
            passHref
          >
            <Box
              _hover={{ opacity: '80%' }}
              textAlign="center"
              position="relative"
              cursor="pointer"
            >
              <Image src={product.images[0].src} />
              <Text fontWeight="bold" position="absolute" bottom="15%" w="100%">
                {product.title}
              </Text>
              <Text position="absolute" bottom="5%" w="100%" color="gray.500">
                ${product.variants[0].price}
              </Text>
            </Box>
          </NextLink>
        ))}
      </Grid>
      <RichText heading="Treat yourself!" />
      <ImageWithText
        text="Suspendisse gravida, dui in dapibus sollicitudin, augue orci ultricies magna, in porta leo odio eu risus. Cras fermentum justo nisl, eu ullamcorper leo malesuada ac. Nulla in consequat purus. Quisque auctor volutpat eros. Aliquam hendrerit diam velit, a euismod diam gravida sed. In vitae fringilla odio, et aliquam urna."
        image="https://cdn.shopify.com/s/files/1/0472/5705/9496/files/premium-bath-bombs.jpg?v=1610066758"
        heading="Heading"
      />
      <ImageWithText
        reverse
        text="Suspendisse gravida, dui in dapibus sollicitudin, augue orci ultricies magna, in porta leo odio eu risus. Cras fermentum justo nisl, eu ullamcorper leo malesuada ac. Nulla in consequat purus. Quisque auctor volutpat eros. Aliquam hendrerit diam velit, a euismod diam gravida sed. In vitae fringilla odio, et aliquam urna."
        image="https://cdn.shopify.com/s/files/1/0472/5705/9496/files/bath-bomb-and-candle.jpg?v=1610066758"
        heading="Second Heading"
      />
    </Box>
  );
};

export const getStaticProps: GetStaticProps = async () => {
  const productsFetched = (await client.product.fetchAll()) as Product[];

  const products = productsFetched.map((product) => ({
    id: product.id,
    title: product.title,
    handle: product.handle,
    images: [{ src: product.images[0].src }],
    variants: [{ price: product.variants[0].price }],
  }));

  return {
    props: { products },
    revalidate: 60 * 5,
  };
};

export default Home;
