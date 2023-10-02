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

export const lastUsers = [
  {
    id: 1,
    img: '/pictures/p1.png',
    username: 'Elon Musk',
    email: 'elonx@x.com',
    billions: '200 billions',
  },
  {
    id: 2,
    img: '/pictures/p2.png',
    username: 'Jeff Bezos',
    email: 'jeff@amazon.com',
    billions: '171 billions',
  },
  {
    id: 3,
    img: '/pictures/p3.png',
    username: 'Bernard Arnault',
    email: 'bernard@arnault.com',
    billions: '150 billions',
  },
  {
    id: 4,
    img: '/pictures/p4.png',
    username: 'Bill Gates',
    email: 'billgates@microsoft.com',
    billions: '124 billions',
  },
  {
    id: 5,
    img: '/pictures/p5.png',
    username: 'Mark Zuckerberg',
    email: 'mark@facebook.com',
    billions: '97 billions',
  },
  {
    id: 6,
    img: '/pictures/p6.png',
    username: 'Warren Buffett',
    email: 'warren@berkshirehathaway.com',
    billions: '80 billions',
  },
  {
    id: 7,
    img: '/pictures/p7.png',
    username: 'Larry Ellison',
    email: 'larry@oracle.com',
    billions: '79 billions',
  },
  {
    id: 8,
    img: '/pictures/p8.png',
    username: 'Larry Page',
    email: 'larry@google.com',
    billions: '71 billions',
  },
  {
    id: 9,
    img: '/pictures/p9.png',
    username: 'Sergey Brin',
    email: 'sergey@google.com',
    billions: '69 billions',
  },
  {
    id: 10,
    img: '/pictures/p10.png',
    username: 'Mukesh Ambani',
    email: 'mukesh@reliance.com',
    billions: '68 billions',
  },
];

export const chartsUsersData = {
  color: '#8884d8',
  icon: 'users',
  title: 'Total Users',
  number: '11.238',
  percentage: 45,
  dataKey: 'users',
  data: [
    { name: 'Sun', users: 400 },
    { name: 'Mon', users: 600 },
    { name: 'Tue', users: 500 },
    { name: 'Wed', users: 700 },
    { name: 'Thu', users: 400 },
    { name: 'Fri', users: 500 },
    { name: 'Sat', users: 450 },
  ],
};

export const chartBoxProduct = {
  color: 'skyblue',
  icon: 'products',
  title: 'Total Products',
  number: '238',
  dataKey: 'products',
  percentage: 21,
  data: [
    { name: 'Sun', products: 400 },
    { name: 'Mon', products: 600 },
    { name: 'Tue', products: 500 },
    { name: 'Wed', products: 700 },
    { name: 'Thu', products: 400 },
    { name: 'Fri', products: 500 },
    { name: 'Sat', products: 450 },
  ],
};
export const chartBoxRevenue = {
  color: 'teal',
  icon: 'revenue',
  title: 'Total Revenue',
  number: '$56.432',
  dataKey: 'revenue',
  percentage: -12,
  data: [
    { name: 'Sun', revenue: 400 },
    { name: 'Mon', revenue: 600 },
    { name: 'Tue', revenue: 500 },
    { name: 'Wed', revenue: 700 },
    { name: 'Thu', revenue: 400 },
    { name: 'Fri', revenue: 500 },
    { name: 'Sat', revenue: 450 },
  ],
};
export const chartBoxConversion = {
  color: 'gold',
  icon: 'ratio',
  title: 'Total Ratio',
  number: '2.6',
  dataKey: 'ratio',
  percentage: 12,
  data: [
    { name: 'Sun', ratio: 400 },
    { name: 'Mon', ratio: 600 },
    { name: 'Tue', ratio: 500 },
    { name: 'Wed', ratio: 700 },
    { name: 'Thu', ratio: 400 },
    { name: 'Fri', ratio: 500 },
    { name: 'Sat', ratio: 450 },
  ],
};
