const commonRouter = [
    {
        path: '/',
        name: 'Sidebar',
        component: () => import('@/components/Sidebar.vue'),
        redirect: '/workbench',
        children: [
            {path: 'workbench', name: 'Workbench', component: () => import('@/views/Workbench.vue')},
            {path: 'documentation', name: 'Documentation', component: () => import('@/views/Documentation.vue')},
            {path: 'news', name: 'News', component: () => import('@/views/News.vue')},
            {path: 'shrewd', name: 'Shrewd', component: () => import('@/views/Shrewd.vue')},
            {path: 'lightweight', name: 'Lightweight', component: () => import('@/views/Lightweight.vue')},
            {
                path: '/personal',
                name: 'Personal',
                component: () => import('@/views/Personal.vue'),
                redirect: 'dynamic',
                children: [
                    {path: 'dynamic', name: 'Dynamic', component: () => import('@/views/Dynamic.vue')},
                    {path: 'personSet', name: 'PersonSet', component: () => import('@/views/PersonSet.vue')},
                    {path: 'problemFeedback', name: 'ProblemFeedback', component: () => import('@/views/ProblemFeedback.vue')},
                ],
            },
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
