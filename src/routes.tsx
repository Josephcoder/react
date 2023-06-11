import { createBrowserRouter } from "react-router-dom";
import ErrorPage from "./pages/ErrorPage";
import HomePage from "./pages/HomePage";
import Layout from "./pages/Layout";
import PrivateRoutes from "./pages/PrivateRoutes";
import DashboardPage from "./pages/dashboardPage";
import LoginPage from "./pages/LoginPage";

const router = createBrowserRouter([
  {
    path: '/',
    element: <Layout />,
    errorElement: <ErrorPage />,
    children: [
      { index: true, element: <HomePage /> },
      { path: '/login', element: <LoginPage /> },
    ]
  },
  {
    element: <PrivateRoutes />,
    children: [
      {
        path: 'dashboard',
        element: <DashboardPage />,
      },
    ]
  }
]);

export default router;