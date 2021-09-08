import React from 'react';
import type { AppProps } from 'next/app';
import { ChakraProvider } from '@chakra-ui/react';
import ShopProvider from '../context/shop-context';
import { Navbar } from '../components/navbar';
import { Cart } from '../components/cart';
import { NavMenu } from '../components/navmenu';
import { Footer } from '../components/footer';
import { theme } from '../styles/theme';

import '../styles/globals.css';
import '../styles/animations.css';

const MyApp = ({ Component, pageProps }: AppProps) => {
  return (
    <ShopProvider>
      <ChakraProvider theme={theme}>
        <Navbar />
        <Cart />
        <NavMenu />
        <Component {...pageProps} />
        <Footer />
      </ChakraProvider>
    </ShopProvider>
  );
};
export default MyApp;
