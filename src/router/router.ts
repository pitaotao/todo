const commonRouter = [
    {
        path: '/',
        name: 'Index',
        component: () => import('@/views/Index.vue'),
    },
    {
        path: '/login',
        name: 'Login',
        component: () => import('@/views/Login.vue'),
    },
    {
        path: '/workbench',
        name: 'Workbench',
        component: () => import('@/views/Workbench.vue'),
    },
    {
        path: '/documentation',
        name: 'Documentation',
        component: () => import('@/views/Documentation.vue'),
    },
    {
        path: '/news',
        name: 'News',
        component: () => import('@/views/News.vue'),
    },
    {
        path: '/home',
        name: 'Home',
        component: () => import('@/views/Home.vue'),
    },
    {
        path: '/about',
        name: 'About',
        component: () => import('@/views/About.vue'),
    },
];
export default commonRouter;
