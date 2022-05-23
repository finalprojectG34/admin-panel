// project imports
import MinimalLayout from 'layout/MinimalLayout';

// login option 3 routing
import AuthLogin3 from 'views/pages/authentication/authentication3/Login3';
import AuthRegister3 from 'views/pages/authentication/authentication3/Register3';

// ==============================|| AUTHENTICATION ROUTING ||============================== //

const AuthenticationRoutes = {
  path: '/',
  element: <MinimalLayout />,
  children: [
    {
      path: '/login',
      element: <AuthLogin3 />
    },
    {
      path: '/register',
      element: <AuthRegister3 />
    }
  ]
};

export default AuthenticationRoutes;
