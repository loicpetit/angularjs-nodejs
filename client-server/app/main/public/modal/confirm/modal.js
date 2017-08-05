app.factory("ConfirmModal", ['$uibModal', function ($uibModal) {
    return {
        open: function (titre, message) {
            var modalInstance = $uibModal.open({
                templateUrl: 'modal/confirm/view.html',
                controller: 'ModalConfirmController',
                controllerAs: 'modalConfirm',
                resolve: {
                    titre: function(){ return titre; },
                    message: function () { return message; }
                }
            });

            return modalInstance.result;
        }
    };
}]);