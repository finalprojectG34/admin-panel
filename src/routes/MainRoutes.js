// project imports
import MainLayout from 'layout/MainLayout';

import { Navigate } from 'react-router';
// dashboard routing
import DashboardDefault from 'views/dashboard/Default';

// sample page routing
import CategoryCreatePage from '../views/pages/category/create-category';
import CategoryListPage from '../views/pages/category/category-list';
import UserCreatePage from '../views/pages/user/create-user';
import UserListPage from '../views/pages/user/user-list';
import UserSearchPage from '../views/pages/user/search-user';
import ProtectedRoute from '../ui-component/protected-route/protected-route';
import CompanyCreatePage from '../views/pages/company/create-company';
import CompanyListPage from '../views/pages/company/company-list';
import CategorySearchPage from 'views/pages/category/search-category';

// ==============================|| MAIN ROUTING ||============================== //

const RootApp = () => {
  // const [data] = useLocalStorage('store', null);
  // if (!data) {
  return <Navigate to='/dashboard' />;
  // }
  // return <Navigate to='/login' />;
};

const MainRoutes = {
  path: '/',
  element: <MainLayout />,
  children: [
    {
      path: '/',
      element: <RootApp />
    },
    {
      path: '/dashboard',
      element: (
        <ProtectedRoute exact path='/dashboard'>
          <DashboardDefault />
        </ProtectedRoute>
      )
    },
    {
      path: '/category/create',
      element: (
        <ProtectedRoute exact path='/category/create'>
          <CategoryCreatePage />
        </ProtectedRoute>
      )
    },
    {
      path: '/category/list',
      element: (
        <ProtectedRoute exact path='/category/list'>
          <CategoryListPage />
        </ProtectedRoute>
      )
    },
    {
      path: '/category/search',
      element: (
        <ProtectedRoute exact path='/category/search'>
          <CategorySearchPage />
        </ProtectedRoute>
      )
    },
    {
      path: '/user/create',
      element: (
        <ProtectedRoute exact path='/user/create'>
          <UserCreatePage />
        </ProtectedRoute>
      )
    },
    {
      path: '/user/list',
      element: (
        <ProtectedRoute exact path='/user/list'>
          <UserListPage />
        </ProtectedRoute>
      )
    },
    {
      path: '/user/search',
      element: (
        <ProtectedRoute exact path='/user/search'>
          <UserSearchPage />
        </ProtectedRoute>
      )
    },
    {
      path: '/company/create',
      element: (
        <ProtectedRoute exact path='/company/create'>
          <CompanyCreatePage />
        </ProtectedRoute>
      )
    },
    {
      path: '/company/list',
      element: (
        <ProtectedRoute exact path='/company/list'>
          <CompanyListPage />
        </ProtectedRoute>
      )
    }
  ]
};

export default MainRoutes;
