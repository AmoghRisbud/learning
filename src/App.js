import React from 'react';
import {
  ChakraProvider,
  Box,
  Text,
  Link,
  VStack,
  Code,
  Flex,
  Grid,
  theme,
} from '@chakra-ui/react';
import { HamburgerIcon } from '@chakra-ui/icons';
import Navbar from './components/Navbar';

function App() {


  return (
    <ChakraProvider theme={theme}>
     <Navbar/>
    </ChakraProvider>
  );
}

export default App;
