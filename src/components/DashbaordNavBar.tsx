import {
  Flex,
  HStack,
  Heading,
  Spacer,
  useColorModeValue,
} from '@chakra-ui/react';
import { Link } from 'react-router-dom';
import ExpendMenu from './ExpendMenu';
import OverMenu from './OverMenu';

const DashboardNavBar = () => {
  const iconTeal = useColorModeValue('teal.300', 'teal.300');
  return (
    <Flex
      minWidth="max-content"
      alignItems="center"
      paddingY={2}
      paddingX={5}
      bg={iconTeal}
    >
      <Link to="/dashboard">
        <Heading fontWeight="extrabold" fontSize="3xl" color="whitesmoke">
          CAMIS
        </Heading>
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
