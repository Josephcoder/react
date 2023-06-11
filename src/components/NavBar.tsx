import { HStack, Image } from '@chakra-ui/react';
import { Link } from 'react-router-dom';
import logo from '../assets/logo.webp';
import ColorModeSwitch from './ColorModeSwitch';

const NavBar = () => {
  return (
    <HStack>
      <Link to="/">
        <Image src={logo} boxSize="40px" objectFit='cover' />
      </Link>
      <ColorModeSwitch />
    </HStack>
  );
};

export default NavBar;
