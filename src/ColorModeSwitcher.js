import { IconButton, useColorMode, useColorModeValue } from '@chakra-ui/react';
import React from 'react';
import { FaMoon, FaSun } from 'react-icons/fa';

export const ColorModeSwitcher = (props) => {
  const { toggleColorMode } = useColorMode();
  const SwitchIcon = useColorModeValue(FaMoon, FaSun);


  return (

      <IconButton
        variant="ghost"
        color="current"
        position="fixed"
        top={4}
        zIndex="overlay"
        right={4}
        onClick={toggleColorMode}
        icon={<SwitchIcon />}
        {...props}
      />
  
  );
};

export default ColorModeSwitcher;
