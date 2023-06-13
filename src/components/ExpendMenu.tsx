import {
  Button,
  Drawer,
  DrawerBody,
  DrawerCloseButton,
  DrawerContent,
  DrawerFooter,
  DrawerHeader,
  DrawerOverlay,
  Input,
  List,
  ListIcon,
  ListItem,
  Text,
  useDisclosure,
} from '@chakra-ui/react';
import React from 'react';
import { ImProfile } from 'react-icons/im';
import { IoMdMenu } from 'react-icons/io';

const ExpendMenu = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const btnRef = React.useRef();
  return (
    <>
      <Button
        fontSize="sm"
        ref={btnRef}
        colorScheme="teal"
        onClick={onOpen}
        variant="normal"
      >
        <IoMdMenu size="26px" />
      </Button>
      <Drawer
        isOpen={isOpen}
        placement="right"
        onClose={onClose}
        finalFocusRef={btnRef}
      >
        <DrawerOverlay />
        <DrawerContent>
          <DrawerCloseButton />
          <DrawerHeader>Dashboard</DrawerHeader>

          <DrawerBody>
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
          </DrawerBody>

          <DrawerFooter></DrawerFooter>
        </DrawerContent>
      </Drawer>
    </>
  );
};

export default ExpendMenu;
