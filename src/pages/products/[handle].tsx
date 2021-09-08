import React from 'react';
import { GetStaticPaths, GetStaticProps, NextPage } from 'next';
import { useShop } from '../../hooks/useShop';
import { Box, Grid, Image, Text, Heading, Flex } from '@chakra-ui/react';
import { BathButton } from '../../components/bath-button';
import { client } from '../../context/shop-context';
import { Product as ProductType } from '../../context/shop-context';

type ProductProps = {
  product: ProductType;
};

const Product: NextPage<ProductProps> = ({ product }) => {
  const { addItemToCheckout } = useShop();

  return (
    <Box padding="2rem">
      <Grid
        templateColumns={{ base: '1fr', lg: 'repeat(2, 1fr)' }}
        m="auto"
        gap="2rem"
      >
        <Flex justifyContent="center" alignItems="center">
          <Image src={product.images[0].src} />
        </Flex>
        <Flex
          flexDir="column"
          alignItems="center"
          justifyContent="center"
          gridGap="2rem"
        >
          <Heading>{product.title}</Heading>
          <Text fontWeight="bold">${product.variants[0].price}</Text>
          <Text color="gray.500">{product.description}</Text>
          <BathButton
            onClick={() => addItemToCheckout(String(product.variants[0].id), 1)}
            text="Add To Cart"
          />
        </Flex>
      </Grid>
    </Box>
  );
};

export const getStaticPaths: GetStaticPaths = async () => {
  const productsFetched = (await client.product.fetchAll()) as ProductType[];

  const paths = productsFetched.map((product) => ({
    params: { handle: product.handle },
  }));

  return {
    paths,
    fallback: 'blocking',
  };
};

export const getStaticProps: GetStaticProps = async (ctx) => {
  if (!ctx.params)
    return {
      notFound: true,
    };

  const { handle } = ctx.params;
  const product = (await client.product.fetchByHandle(
    String(handle),
  )) as ProductType;

  return {
    props: {
      product: {
        title: product.title,
        images: [{ src: product.images[0].src }],
        variants: [
          { price: product.variants[0].price, id: product.variants[0].id },
        ],
        description: product.description,
      },
    },
    revalidate: 60 * 5,
  };
};

export default Product;
