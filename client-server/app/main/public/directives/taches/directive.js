app.directive('taches', [function () {
    return {
        restrict: 'E',
        templateUrl: '/directives/taches/view.html',
        scope: true,
        bindToController: {
            values: '='
        },
        controller: 'TachesDirectiveController',
        controllerAs: 'tachesDirective'
    }
}]);