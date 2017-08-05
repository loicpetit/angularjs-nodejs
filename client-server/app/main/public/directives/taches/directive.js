app.directive('taches', [function () {
    return {
        restrict: 'E',
        templateUrl: '/directives/taches/view.html',
        scope: true,
        bindToController: {
            values: '=',
            onTacheSelected: '&',// expect callback(tache)
            onTacheUnselected: '&'//   only when recliking the same tache, expect callback(tache)
        },
        controller: 'TachesDirectiveController',
        controllerAs: 'tachesDirective'
    }
}]);