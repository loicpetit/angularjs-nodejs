app.controller('TachesViewController', ['$state', 'TacheService', function ($state, TacheService) {
    this.taches = [];
    TacheService.findAll().then(function(taches){
        this.taches = taches;
    }.bind(this));

    this.onTacheSelected = function (tache) {
        $state.go('taches.tache', {
            tache: tache
        });
    }
    this.onTacheUnselected = function (tache) {
        $state.go('taches', {}, { reload: true });
    }
}]);