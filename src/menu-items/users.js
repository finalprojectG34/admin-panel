// assets
import { IconBrandChrome, IconHelp } from '@tabler/icons';

// constant
const icons = { IconBrandChrome, IconHelp };

// ==============================|| SAMPLE PAGE & DOCUMENTATION MENU ITEMS ||============================== //

const users = {
    id: 'users',
    title: 'Users',
    type: 'group',
    children: [
        {
            id: 'icons',
            title: 'Manage Users',
            type: 'collapse',
            icon: icons.IconWindmill,
            children: [
                {
                    id: 'tabler-icons',
                    title: 'Create User',
                    type: 'item',
                    url: '/user/create',
                    breadcrumbs: false
                },
                {
                    id: 'material-icons',
                    title: 'Users List',
                    type: 'item',
                    url: '/user/list',
                    breadcrumbs: false
                }
            ]
        }
    ]
};

export default users;
