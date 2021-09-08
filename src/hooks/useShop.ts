import { useContext } from 'react';
import { ShopContext } from '../context/shop-context';

const useShop = () => {
  return useContext(ShopContext);
};

export { useShop };
