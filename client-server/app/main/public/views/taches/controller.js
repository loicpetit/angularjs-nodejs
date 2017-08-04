app.controller('TachesViewController', ['$state', 'TachesService', function ($state,TachesService) {
    this.taches = angular.copy(TachesService.findAll());

    this.onTacheSelected = function (tache) {
        $state.go('taches.tache', {
            tache: tache
        });
    }
    this.onTacheUnselected = function (tache) {
        $state.go('taches', {}, { reload: true });
    }
}]);