import { HStack, Image, Spacer } from '@chakra-ui/react';
import { Link } from 'react-router-dom';
import logo from '../assets/logo.webp';
import ColorModeSwitch from './ColorModeSwitch';

const NavBar = () => {
  return (
    <HStack bg="teal" padding={3}>
      <Link to="/">
        <Image src={logo} boxSize="40px" objectFit="cover" />
      </Link>
      <Spacer />
      <ColorModeSwitch />
    </HStack>
  );
};

export default NavBar;
