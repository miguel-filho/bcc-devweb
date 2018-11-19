var router

(function() {
    const routes = [
        {
            name: 'home',
            path: '/home',
            component: homeComponent
        },
        {
            name: 'login',
            path: '/login',
            component: loginComponent
        },
        {
            name: 'cadastroServico',
            path: '/cadastroServico',
            component: cadastroServicoComponent
        },
        {
            name: 'servicoEdit',
            path: '/servicoEdit/:id',
            component: cadastroServicoComponent
        },
        {
            name: 'servicoList',
            path: '/servicoList',
            component: listServicosComponent
        },
        {
            path: '*', redirect: '/login'
        }
    ]
    
    router = new VueRouter({
        routes: routes
    });
})()