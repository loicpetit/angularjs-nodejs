app.controller('TacheViewController', ['$state', '$stateParams', function ($state, $stateParams) {
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
        //save
    }

    this.cancel = function(){        
        this.isEdit = false;
        this.copy = null;
    }
}]);