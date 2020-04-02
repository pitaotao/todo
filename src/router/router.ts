const commonRouter = [
    {
        path: '/',
        name: 'Sidebar',
        component: () => import('@/components/Sidebar.vue'),
        redirect: '/workbench',
        children: [
            {path: 'index', name: 'Index', component: () => import('@/views/Index.vue')},
            {path: 'workbench', name: 'Workbench', component: () => import('@/views/Workbench.vue')},
            {path: 'documentation', name: 'Documentation', component: () => import('@/views/Documentation.vue')},
            {path: 'news', name: 'News', component: () => import('@/views/News.vue')},
        ],
    },
    {
        path: '/login',
        name: 'Login',
        component: () => import('@/views/Login.vue'),
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
