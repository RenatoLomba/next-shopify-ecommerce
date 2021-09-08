import React from 'react';
import NextLink from 'next/link';
import { Flex, Icon, Image, Badge } from '@chakra-ui/react';
import { MdShoppingBasket, MdMenu } from 'react-icons/md';
import { useShop } from '../hooks/useShop';

const Navbar = () => {
  const { openCart, openMenu, checkout } = useShop();

  return (
    <Flex
      as="nav"
      flexDirection="row"
      justifyContent="space-between"
      alignItems="center"
      padding="2rem"
      backgroundColor="primary"
    >
      <Icon
        onClick={openMenu}
        fill="white"
        cursor="pointer"
        as={MdMenu}
        w={30}
        h={30}
      />
      <NextLink href="/" passHref>
        <a>
          <Image
            src="https://cdn.shopify.com/s/files/1/0472/5705/9496/files/Logologo_1.svg?v=1610055540"
            w={100}
            h={100}
          />
        </a>
      </NextLink>
      <Flex alignItems="center">
        <Icon
          onClick={openCart}
          fill="white"
          cursor="pointer"
          as={MdShoppingBasket}
          w={30}
          h={30}
        />
        <Badge
          alignSelf="flex-start"
          backgroundColor="secondary"
          borderRadius="50%"
          w={5}
          h={5}
          marginLeft="0.25rem"
          textAlign="center"
          color="white"
        >
          {checkout?.lineItems.length}
        </Badge>
      </Flex>
    </Flex>
  );
};

export { Navbar };
