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
  SlideFade,
} from '@chakra-ui/react';
import { HamburgerIcon, CloseIcon } from '@chakra-ui/icons';
import { useState } from 'react';
const Navbar = () => {
  const [isSidebarOpen, SetIsSidebarOpen] = useState(false);

  const Sidebar = () => {
    return (
      <>
        {isSidebarOpen && (
          <SlideFade in={isSidebarOpen} offsetY="-20px">
            <Flex
              display={{ base: 'flex', md: 'none' }}
              direction="column"
              alignItems="center"
            >
              <Text size={12} px={4}>
                Home
              </Text>
              <Text size={12} px={4}>
                About us
              </Text>
              <Text size={12} px={4}>
                Contact us
              </Text>
            </Flex>
          </SlideFade>
        )}
      </>
    );
  };
  return (
    <>
      <Flex p={6} justify="space-between">
        <Text>Logo</Text>
        <Flex display={{ base: 'none', md: 'flex' }}>
          <Text px={4}>Home</Text>
          <Text px={4}>About us</Text>
          <Text px={4}>Contact us</Text>
        </Flex>

        <Box display={{ base: 'block', md: 'none' }}>
          {isSidebarOpen ? (
            <CloseIcon onClick={() => SetIsSidebarOpen(!isSidebarOpen)} />
          ) : (
            <HamburgerIcon onClick={() => SetIsSidebarOpen(!isSidebarOpen)} />
          )}
        </Box>
      </Flex>
      <Sidebar />
    </>
  );
};
export default Navbar;
