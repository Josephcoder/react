import NavBar from '../components/NavBar';
import { Outlet } from 'react-router-dom';
import { Box } from '@chakra-ui/react';

const Layout = () => {
  return (
    <Box padding="15px">
      <NavBar />
      <Box padding="5px">
        <Outlet />
      </Box>
    </Box>
  );
};

export default Layout;
