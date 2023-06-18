import {
  Avatar,
  Button,
  Flex,
  Menu,
  MenuButton,
  MenuItem,
  MenuList,
} from '@chakra-ui/react';
const OverMenu = () => {
  return (
    <Menu>
      <MenuButton>
        <Avatar as="span" size="xs" src="https://bit.ly/broken-link" />
      </MenuButton>
      <MenuList p="2">
        <Flex flexDirection="column">
          <MenuItem borderRadius="md">Profile</MenuItem>
          <MenuItem borderRadius="md">Change password</MenuItem>
          <MenuItem borderRadius="md">Profile</MenuItem>
          <MenuItem borderRadius="md">Logout</MenuItem>
        </Flex>
      </MenuList>
    </Menu>
  );
};

export default OverMenu;
