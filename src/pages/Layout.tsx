import {
  AbsoluteCenter,
  Box,
  Flex,
  HStack,
  Show,
  Text,
} from '@chakra-ui/react';
import { Outlet } from 'react-router-dom';
import DashboardNavBar from '../components/DashbaordNavBar';
import LeftSidePanel from '../components/LeftSidePanel';
import SmallTopBar from '../components/SmallTopBar';
const Layout = () => {
  return (
    <Box>
      <DashboardNavBar />
      <Box>
        <Flex h="90vh" mt="0.4">
          <Show above="lg">
            <LeftSidePanel />
          </Show>
          <Flex
            direction="column"
            bg="#f0f2f5"
            position="relative"
            width={{ base: '100%', sm: '100%', md: '100%' }}
          >
            <Box p="5" overflow="auto">
              <SmallTopBar />

              <Outlet />
            </Box>
            <AbsoluteCenter axis="horizontal" bottom="10" flex="1" mt="10">
              <HStack justifyItems="baseline" color="#8696a0">
                <Text fontSize="sm" fontWeight="medium">
                  @copy Xcoder
                </Text>
              </HStack>
            </AbsoluteCenter>
          </Flex>
        </Flex>
      </Box>
    </Box>
  );
};

export default Layout;
