import {
  Button,
  HStack,
  Heading,
  Text,
  Icon,
  List,
  ListIcon,
  ListItem,
  Stack,
  StackDivider,
} from '@chakra-ui/react';
import { ImProfile } from 'react-icons/im';
import { MdDashboardCustomize } from 'react-icons/md';
import { Link } from 'react-router-dom';

const LeftSideMenuList = () => {
  return (
    <Stack spacing="2" divider={<StackDivider />}>
      <Link to="/dashboard">
        <HStack>
          <Icon as={MdDashboardCustomize} color="teal" fontSize="2xl" />
          <Text> Dashboard</Text>
        </HStack>
      </Link>
      <List>
        <ListItem
          py="1"
          _hover={{
            cursor: 'pointer',
            backgroundColor: '#f5f6f6',
          }}
        >
          <Link to="/dashboard/district">
            <ListIcon as={ImProfile} color="green.500" />
            District Schools
          </Link>
        </ListItem>
        <ListItem
          py="1"
          _hover={{
            cursor: 'pointer',
            backgroundColor: '#f5f6f6',
          }}
        >
          <Link to="/dashboard/district">
            <ListIcon as={ImProfile} color="green.500" />
            Uploaded marks
          </Link>
        </ListItem>
      </List>
    </Stack>
  );
};

export default LeftSideMenuList;
