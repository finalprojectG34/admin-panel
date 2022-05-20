// assets
import { IconPalette, IconShadow, IconTypography, IconWindmill } from '@tabler/icons';

// constant
const icons = {
    IconTypography,
    IconPalette,
    IconShadow,
    IconWindmill
};

// ==============================|| UTILITIES MENU ITEMS ||============================== //

const companies = {
    id: 'companies',
    title: 'Companies',
    type: 'group',
    children: [
        {
            id: 'icons',
            title: 'Manage Companies',
            type: 'collapse',
            icon: icons.IconWindmill,
            children: [
                {
                    id: 'tabler-icons',
                    title: 'Create Company',
                    type: 'item',
                    url: '/category/create',
                    breadcrumbs: false
                },
                {
                    id: 'material-icons',
                    title: 'Company List',
                    type: 'item',
                    url: '/category/list',
                    breadcrumbs: false
                }
            ]
        }
    ]
};

export default companies;
