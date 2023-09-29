export type Item = {
  menu: string;
  slug: string;
  tooltip?: string;
  icon?: string;
};

export type UserInfo = {
  src: string;
  username: string;
  isAdmin?: boolean;
};

export type SidebarProps = {
  logo: string | 'vercel.svg';
};

export const userData: UserInfo = {
  src: 'user.jpg',
  username: '3xp1o1t',
  isAdmin: true,
};

export const menus: { category: string; items: Item[] }[] = [
  {
    category: 'Main',
    items: [
      {
        menu: 'Home',
        slug: '/',
        tooltip: 'Home page',
        icon: 'home',
      },
    ],
  },
  {
    category: 'Managment',
    items: [
      {
        menu: 'Users',
        slug: '/users',
        tooltip: 'User page',
        icon: 'users',
      },
      {
        menu: 'Products',
        slug: '/products',
        tooltip: 'Products page',
        icon: 'products',
      },
      {
        menu: 'Providers',
        slug: '/providers',
        tooltip: 'Providers page',
        icon: 'providers',
      },
    ],
  },
  {
    category: 'Settings',
    items: [
      {
        menu: 'Server',
        slug: '/server',
        tooltip: 'Server page',
        icon: 'server',
      },
      {
        menu: 'Charts',
        slug: '/charts',
        tooltip: 'Charts page',
        icon: 'charts',
      },
    ],
  },
  {
    category: 'Session',
    items: [
      {
        menu: 'Lock',
        slug: '/lock',
        tooltip: 'lock app',
        icon: 'lock',
      },
      {
        menu: 'Info',
        slug: '/info',
        tooltip: 'info page',
        icon: 'info',
      },
    ],
  },
];
