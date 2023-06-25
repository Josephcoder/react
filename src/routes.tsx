import { createBrowserRouter } from 'react-router-dom';
import DashboardPage from './pages/DashboardPage';
import ErrorPage from './pages/ErrorPage';
import Layout from './pages/Layout';
import LoginPage from './pages/LoginPage';
import DistrictPage from './pages/DistrictPage';
import ProfilePage from './pages/ProfilePage';
import MarksPages from './pages/MarksPages';

const router = createBrowserRouter([
  {
    path: '/',
    element: <LoginPage />,
    errorElement: <ErrorPage />,
  },
  {
    path: '/dashboard',
    element: <Layout />,
    children: [
      {
        index: true,
        element: <DashboardPage />,
      },
      {
        path: '/dashboard/district',
        element: <DistrictPage />,
      },
      {
        path: '/dashboard/marks',
        element: <MarksPages />,
      },
    ],
  },
]);

export default router;
