import { Flex, HStack, Image, Spacer } from '@chakra-ui/react';
import { Link } from 'react-router-dom';
import logo from '../assets/logo.webp';
import OverMenu from './OverMenu';
import ExpendMenu from './ExpendMenu';

const DashboardNavBar = () => {
  return (
    <Flex minWidth="max-content" alignItems="center" paddingY={2} paddingX={5}>
      <Link to="/dashboard">
        <Image src={logo} boxSize="40px" objectFit="cover" />
      </Link>
      <Spacer />
      <HStack>
        <OverMenu />
        <ExpendMenu />
      </HStack>
    </Flex>
  );
};

export default DashboardNavBar;
