app.factory("TacheModal", ['$uibModal', function ($uibModal) {
    return {
        open: function () {
            var modalInstance = $uibModal.open({
                templateUrl: 'modal/tache/view.html',
                controller: 'ModalTacheController',
                controllerAs: 'tacheModal'
            });

            return modalInstance.result;
        }
    };
}]);