app.controller('ModalConfirmController', ['$uibModalInstance', 'titre', 'message', function ($uibModalInstance, titre, message) {
    this.message = message;
    this.titre = titre;

    this.close = function () {
        $uibModalInstance.close();
    };

    this.dismiss = function () {
        $uibModalInstance.dismiss();
    };
}]);