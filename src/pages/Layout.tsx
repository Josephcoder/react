import { Box } from '@chakra-ui/react';
import { Outlet } from 'react-router-dom';
import DashboardNavBar from '../components/DashbaordNavBar';
const Layout = () => {
  return (
    <Box padding={0}>
      <DashboardNavBar />
      <Box padding="5px">
        <Outlet />
      </Box>
    </Box>
  );
};

export default Layout;
