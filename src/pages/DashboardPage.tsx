import { Flex } from '@chakra-ui/react';
import LeftSidePanel from '../components/LeftSidePanel';
import RightSidePanel from '../components/RightSidePanel';

const DashboardPage = () => {
  return (
    <Flex h="90vh">
      <LeftSidePanel />
      <RightSidePanel />
    </Flex>
  );
};

export default DashboardPage;
