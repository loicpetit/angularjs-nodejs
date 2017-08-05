app.controller('TacheViewController', ['$state', '$stateParams', 'TacheService', function ($state, $stateParams, TacheService) {
    this.tache = $stateParams.tache;
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
            this.tache.dateModification = tacheUpdated.dateModification;
        }.bind(this), function fail(reason){
            console.error('Fail update tache: ', reason);
        }.bind(this));
    }

    this.cancel = function(){        
        this.isEdit = false;
        this.copy = null;
    }
}]);