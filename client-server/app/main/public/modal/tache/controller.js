app.controller('ModalTacheController', ['$uibModalInstance', function ($uibModalInstance) {
    this.tache = {
        libelle: null
    };

    this.isValidated = function(){
        if(this.tache.libelle === null || this.tache.libelle.trim() === ''){
            return false;
        }
        return true;
    }

    this.close = function () {
        $uibModalInstance.close(this.tache);
    };

    this.dismiss = function () {
        $uibModalInstance.dismiss();
    };
}]);