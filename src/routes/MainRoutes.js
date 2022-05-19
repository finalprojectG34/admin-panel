// project imports
import MainLayout from 'layout/MainLayout';

// dashboard routing
import DashboardDefault from 'views/dashboard/Default';

// sample page routing
import CategoryCreatePage from '../views/pages/category/create-category';
import CategoryListPage from '../views/pages/category/category-list';
import UserCreatePage from '../views/pages/user/create-user';
import UserListPage from '../views/pages/user/user-list';

// ==============================|| MAIN ROUTING ||============================== //

const MainRoutes = {
    path: '/',
    element: <MainLayout />,
    children: [
        {
            path: '/',
            element: <DashboardDefault />
        },
        {
            path: '/dashboard/default',
            element: <DashboardDefault />
        },
        {
            path: '/category/create',
            element: <CategoryCreatePage />
        },
        {
            path: '/category/list',
            element: <CategoryListPage />
        },
        {
            path: '/user/create',
            element: <UserCreatePage />
        },
        {
            path: '/user/list',
            element: <UserListPage />
        }
    ]
};

export default MainRoutes;
