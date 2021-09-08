import React from 'react';
import NextLink from 'next/link';
import { useShop } from '../hooks/useShop';
import {
  Drawer,
  DrawerBody,
  DrawerFooter,
  DrawerHeader,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
  Text,
  VStack,
} from '@chakra-ui/react';

export const NavMenu = () => {
  const { isMenuOpen, closeMenu } = useShop();

  return (
    <Drawer isOpen={isMenuOpen} placement="left" onClose={closeMenu} size="sm">
      <DrawerOverlay />
      <DrawerContent>
        <DrawerCloseButton _focus={{ outline: 'none' }} />
        <DrawerHeader>Menu</DrawerHeader>

        <DrawerBody>
          <VStack p="2rem">
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
        </DrawerBody>

        <DrawerFooter textAlign="center">
          <Text w="100%">&copy; Copyright www.workingwithshopify.com</Text>
        </DrawerFooter>
      </DrawerContent>
    </Drawer>
  );
};
