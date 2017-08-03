app.config(function ($stateProvider, $urlRouterProvider) {
    $stateProvider
        .state('home', {
            url: '/',
            controller: 'HomeViewController as homeView',
            templateUrl: '/views/home/view.html'
        })
        .state('taches', {
            url: '/taches',
            views: {
                "": {
                    controller: 'TachesViewController as tachesView',
                    templateUrl: '/views/taches/view.html'
                },
                "aside": {
                    controller: 'TachesViewController as tachesView',
                    templateUrl: '/views/taches/aside.html'
                }
            }
        });
    // Redirection vers l'accueil en cas de route introuvable
    $urlRouterProvider.otherwise('/');
});