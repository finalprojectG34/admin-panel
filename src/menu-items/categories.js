// assets
import {
  IconPalette,
  IconShadow,
  IconTypography,
  IconWindmill,
} from '@tabler/icons';

// constant
const icons = {
  IconTypography,
  IconPalette,
  IconShadow,
  IconWindmill,
};

// ==============================|| UTILITIES MENU ITEMS ||============================== //

const categories = {
  id: 'categories',
  title: 'Categories',
  type: 'group',
  children: [
    {
      id: 'icons',
      title: 'Manage Categories',
      type: 'collapse',
      icon: icons.IconWindmill,
      children: [
        {
          id: 'tabler-icons',
          title: 'Create Category',
          type: 'item',
          url: '/category/create',
          breadcrumbs: false,
        },
        {
          id: 'material-icons',
          title: 'Categories List',
          type: 'item',
          url: '/category/list',
          breadcrumbs: false,
        },
        {
          id: 'material-icons',
          title: 'Search Category',
          type: 'item',
          url: '/category/search',
          breadcrumbs: false,
        },
      ],
    },
  ],
};

export default categories;
