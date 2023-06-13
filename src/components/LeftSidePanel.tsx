import { Avatar, Flex, Spacer, Text } from '@chakra-ui/react';
import FunctionList from './LeftSideMenuList';

const LeftSidePanel = () => {
  return (
    <Flex direction="column" w="20%" paddingX={5}>
      <FunctionList />
      <Spacer />
      <Flex gap={2} direction="row">
        <Avatar as="span" size="xs" src="https://bit.ly/broken-link" />
        <Text>Joseph</Text>
      </Flex>
    </Flex>
  );
};

export default LeftSidePanel;
