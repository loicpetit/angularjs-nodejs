app.controller('TachesViewController',['TachesService', function(TachesService){
    this.taches = angular.copy(TachesService.findAll());
}]);