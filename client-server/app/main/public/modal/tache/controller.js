app.controller('ModalTacheController', ['$uibModalInstance', 'TacheService', function ($uibModalInstance, TacheService) {
    this.tache = {
        libelle: null
    };

    this.isValidated = function(){
        return TacheService.validate(this.tache);
    }

    this.close = function () {
        $uibModalInstance.close(this.tache);
    };

    this.dismiss = function () {
        $uibModalInstance.dismiss();
    };
}]);