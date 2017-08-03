app.controller('TachesViewController', ['$timeout', 'TachesService', function ($timeout, TachesService) {
    this.taches = [];
    this.initTaches = function(){
        this.taches.splice(0, this.taches.length)
        var taches = TachesService.findAll();
        for(var i in taches){
            this.taches.push(taches[i]);
        }
    }
    this.initTaches();
    this.selected = {
        tache: {
            libelle: 'test'
        }
    };
    this.onTacheSelected = function (tache) {
        $timeout(function () {
            this.selected.tache = tache;
            console.log('tache selected: ', this.selected.tache);
        }.bind(this));
    }
    this.onTacheUnselected = function (tache) {
        this.selected.tache = null;
        console.log('tache unselected');
    }
    this.log = function(){
        console.log('TachesView: ', this);
    }
}]);