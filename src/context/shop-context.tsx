import React, { createContext, FC, useEffect, useState } from 'react';
import Client, { Product as ProductShopify, Cart } from 'shopify-buy';
import nookies from 'nookies';

export type Product = ProductShopify & { handle: string };

type ShopContextData = {
  checkout?: Cart;
  isCartOpen: boolean;
  isMenuOpen: boolean;
  openCart: () => void;
  closeCart: () => void;
  openMenu: () => void;
  closeMenu: () => void;
  addItemToCheckout: (variantId: string, quantity: number) => Promise<void>;
  removeLineItem: (lineItemsToRemove: string[]) => Promise<void>;
};

const ShopContext = createContext({} as ShopContextData);

const client = Client.buildClient({
  domain: process.env.NEXT_PUBLIC_SHOPIFY_API_DOMAIN || '',
  storefrontAccessToken: process.env.NEXT_PUBLIC_SHOPIFY_API_TOKEN || '',
});

const ShopProvider: FC = ({ children }) => {
  const [checkout, setCheckout] = useState<Cart>();
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const createCheckout = async () => {
    const checkoutCreated = await client.checkout.create();
    nookies.set(null, 'CHECKOUT_ID', String(checkoutCreated.id));
    setCheckout(checkoutCreated);
  };

  const fetchCheckout = async (id: string) => {
    const checkout = await client.checkout.fetch(id);
    setCheckout(checkout);
  };

  const addItemToCheckout = async (variantId: string, quantity: number) => {
    if (!checkout) return;

    const lineItemsToAdd = [{ variantId, quantity }];
    const checkoutUpdated = await client.checkout.addLineItems(
      checkout.id,
      lineItemsToAdd,
    );
    setCheckout(checkoutUpdated);

    openCart();
  };

  const removeLineItem = async (lineItemsToRemove: string[]) => {
    if (!checkout) return;
    const checkoutUpdated = await client.checkout.removeLineItems(
      checkout.id,
      lineItemsToRemove,
    );
    setCheckout(checkoutUpdated);
  };

  const openCart = () => setIsCartOpen(true);

  const closeCart = () => setIsCartOpen(false);

  const openMenu = () => setIsMenuOpen(true);

  const closeMenu = () => setIsMenuOpen(false);

  useEffect(() => {
    const { CHECKOUT_ID } = nookies.get(null);
    if (CHECKOUT_ID) {
      fetchCheckout(CHECKOUT_ID);
    } else {
      createCheckout();
    }
  }, []);

  return (
    <ShopContext.Provider
      value={{
        isCartOpen,
        isMenuOpen,
        checkout,
        closeCart,
        closeMenu,
        openCart,
        openMenu,
        addItemToCheckout,
        removeLineItem,
      }}
    >
      {children}
    </ShopContext.Provider>
  );
};

const ShopConsumer = ShopContext.Consumer;

export { ShopContext, ShopConsumer, client };

export default ShopProvider;
