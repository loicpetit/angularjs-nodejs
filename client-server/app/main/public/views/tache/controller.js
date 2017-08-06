app.controller('TacheViewController', ['$state', '$stateParams', 'tache', 'TacheService', function ($state, $stateParams, tache, TacheService) {
    this.tache = tache;
    this.copy = null;
    this.isEdit = false;

    this.close = function(){
        $state.go('taches', {}, {reload: true});
    }

    this.edit = function(){
        this.copy = angular.copy(this.tache);
        this.isEdit = true;
    }

    this.save = function(){
        this.isEdit = false;
        this.tache.libelle = this.copy.libelle;
        this.copy = null;
        TacheService.update(this.tache).then(function success(tacheUpdated){
            this.tache = tacheUpdated;
        }.bind(this), function fail(reason){
            console.error('Fail update tache: ', reason);
        }.bind(this));
    }

    this.cancel = function(){        
        this.isEdit = false;
        this.copy = null;
    }
}]);