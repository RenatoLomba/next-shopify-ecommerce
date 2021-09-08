import React, { useEffect, useState } from 'react';
import { useShop } from '../hooks/useShop';
import { CloseIcon } from '@chakra-ui/icons';
import {
  Drawer,
  DrawerBody,
  DrawerFooter,
  DrawerHeader,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
  Button,
  Grid,
  Text,
  Flex,
  Image,
  Link,
  Box,
} from '@chakra-ui/react';

export const Cart = () => {
  const {
    isCartOpen,
    closeCart,
    checkout: checkoutStored,
    removeLineItem,
  } = useShop();
  const [checkout, setCheckout] = useState<any>(checkoutStored);

  useEffect(() => {
    if (!checkoutStored) return;
    setCheckout(checkoutStored);
  }, [checkoutStored]);

  return (
    <Drawer isOpen={isCartOpen} placement="right" onClose={closeCart} size="sm">
      <DrawerOverlay />
      <DrawerContent>
        <DrawerCloseButton _focus={{ outline: 'none' }} />
        <DrawerHeader>Your Shopping Cart</DrawerHeader>

        <DrawerBody>
          {checkout?.lineItems?.length > 0 ? (
            checkout.lineItems.map((item: any) => (
              <Grid
                templateColumns="repeat(4, 1fr)"
                gap={1}
                key={item.id}
                marginBottom="0.25rem"
              >
                <Flex alignItems="center" justifyContent="center">
                  <CloseIcon
                    cursor="pointer"
                    onClick={() => removeLineItem([item.id])}
                  />
                </Flex>
                <Flex alignItems="center" justifyContent="center">
                  <Image src={item.variant.image.src} />
                </Flex>
                <Flex alignItems="center" justifyContent="center">
                  <Text textAlign="center">{item.title}</Text>
                </Flex>
                <Flex alignItems="center" justifyContent="flex-end">
                  <Text>${item.variant.price}</Text>
                </Flex>
              </Grid>
            ))
          ) : (
            <Box h="100%" w="100%">
              <Text
                h="100%"
                display="flex"
                flexDir="column"
                alignItems="center"
                justifyContent="center"
              >
                Your Cart is empty!
              </Text>
            </Box>
          )}
        </DrawerBody>

        {checkout?.lineItems?.length > 0 && (
          <DrawerFooter>
            <Button w="100%" _focus={{ outline: 'none' }}>
              <Link
                _hover={{ textDecor: 'none' }}
                w="100%"
                href={checkout?.webUrl}
              >
                Checkout
              </Link>
            </Button>
          </DrawerFooter>
        )}
      </DrawerContent>
    </Drawer>
  );
};
