app.controller('TachesDirectiveController',[function(){
    this.add = function(){
        alert('add');
    };
    this.delete = function(tache){
        alert('delete: '+tache.id);
    };
}]);