import {
  Button,
  Drawer,
  DrawerBody,
  DrawerCloseButton,
  DrawerContent,
  DrawerFooter,
  DrawerHeader,
  DrawerOverlay,
  List,
  ListIcon,
  ListItem,
  useDisclosure,
} from '@chakra-ui/react';
import React from 'react';
import { ImProfile } from 'react-icons/im';
import { IoMdMenu } from 'react-icons/io';
import { Link } from 'react-router-dom';

const ExpendMenu = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const btnRef = React.useRef();
  return (
    <>
      <Button
        fontSize="sm"
        colorScheme="teal"
        onClick={onOpen}
        variant="normal"
      >
        <IoMdMenu size="26px" />
      </Button>
      <Drawer isOpen={isOpen} placement="right" onClose={onClose}>
        <DrawerOverlay />
        <DrawerContent>
          <DrawerCloseButton />
          <DrawerHeader>Dashboard</DrawerHeader>

          <DrawerBody>
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
              <ListItem
                py="1"
                _hover={{
                  cursor: 'pointer',
                  backgroundColor: '#f5f6f6',
                }}
              >
                <Link to="/">
                  <ListIcon as={ImProfile} color="green.500" />
                  Logout
                </Link>
              </ListItem>
            </List>
          </DrawerBody>

          <DrawerFooter></DrawerFooter>
        </DrawerContent>
      </Drawer>
    </>
  );
};

export default ExpendMenu;
