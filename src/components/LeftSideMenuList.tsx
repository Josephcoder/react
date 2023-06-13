import {
  Heading,
  List,
  ListIcon,
  ListItem,
  Stack,
  StackDivider,
} from '@chakra-ui/react';
import { ImProfile } from 'react-icons/im';

const LeftSideMenuList = () => {
  return (
    <Stack spacing="2" divider={<StackDivider w="82%" />}>
      <Heading fontSize="2xl">Dashboard</Heading>
      <List>
        <ListItem
          py="1"
          pl="5"
          _hover={{
            cursor: 'pointer',
            backgroundColor: '#f5f6f6',
          }}
        >
          <ListIcon as={ImProfile} color="green.500" />
          Profile
        </ListItem>
        <ListItem
          py="1"
          pl="5"
          _hover={{
            cursor: 'pointer',
            backgroundColor: '#f5f6f6',
          }}
        >
          <ListIcon as={ImProfile} color="green.500" />
          Profile
        </ListItem>
      </List>
    </Stack>
  );
};

export default LeftSideMenuList;
