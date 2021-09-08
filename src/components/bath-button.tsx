import React from 'react';
import { Button, ButtonProps } from '@chakra-ui/react';

type BathButtonProps = ButtonProps & {
  text: string;
};

export const BathButton = ({ text, ...rest }: BathButtonProps) => {
  return (
    <Button
      w="10rem"
      backgroundColor="secondary"
      color="white"
      _hover={{ opacity: '70%' }}
      _active={{ transform: 'scale(0.9)' }}
      _focus={{ outline: 'none' }}
      {...rest}
    >
      {text}
    </Button>
  );
};
