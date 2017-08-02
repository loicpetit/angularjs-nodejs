app.config(function ($stateProvider, $urlRouterProvider) {
    $stateProvider
        .state('home', {
            url: '/',
            views: {
                "": {
                    controller: 'HomeController',
                    templateUrl: '/views/home/view.html'
                },
                "aside": {
                    controller: 'HomeController',
                    templateUrl: '/views/home/aside.html'
                }
            }
        })
        .state('taches', {
            url: '/taches',
            controller: 'TachesController',
            templateUrl: '/views/taches/view.html'
        });
    // Redirection vers l'accueil en cas de route introuvable
    $urlRouterProvider.otherwise('/');
});