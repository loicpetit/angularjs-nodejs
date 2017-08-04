app.config(function ($stateProvider, $urlRouterProvider) {
    $stateProvider
        .state('home', {
            url: '/',
            controller: 'HomeViewController as homeView',
            templateUrl: '/views/home/view.html'
        })
        .state('taches', {
            url: '/taches',
            controller: 'TachesViewController as tachesView',
            templateUrl: '/views/taches/view.html'
        })
        .state('taches.tache', {
            views: {
                "aside@": {
                    controller: 'TacheViewController as tacheView',
                    templateUrl: '/views/tache/view.html'
                }
            },
            params: {
                tache: null
            }
        });
    // Redirection vers l'accueil en cas de route introuvable
    $urlRouterProvider.otherwise('/');
});