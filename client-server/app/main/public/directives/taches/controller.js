app.controller('TachesDirectiveController', ['$scope', 'ConfirmModal', 'TacheModal', 'TacheService', function ($scope, ConfirmModal, TacheModal, TacheService) {
    //  Déselectionne toutes les taches
    this.unselectAll = function () {
        for (var i in this.values) {
            this.values[i].selected = false;
        }
    }
    //  Sélectionne une tâche
    this.selectTache = function (tache) {
        var isSelected = tache.selected;
        this.unselectAll();
        if (!isSelected) {
            tache.selected = true;
            this.onTacheSelected({ tache: tache });
        } else {
            this.onTacheUnselected({ tache: tache });
        }
    }
    //  Ajoute une tâche
    this.add = function () {
        TacheModal.open().then(function (tache) {
            TacheService.create(tache).then(function (tacheCreated) {
                this.values.push(tacheCreated);
            }.bind(this));
        }.bind(this), function () {
            //  cancel create
        });
    };
    //  Supprime une tache
    this.delete = function ($event, tache) {
        $event.stopPropagation();
        ConfirmModal.open('Supprimer une tâche', 'Êtes-vous sûr de vouloir supprimer cette tâche ?').then(function () {
            //  delete
            TacheService.delete(tache.id).then(function success() {
                //  remove in current list
                this.values = this.values.filter(function (item, index, array) {
                    return item.id !== tache.id;
                });
            }.bind(this), function fail(reason) {
                console.error('Fail to delete tache: ', reason);
            }.bind(this));
        }.bind(this), function () {
            //  Ne rien faire si annulé
        });
    };
    //  Met à jour une tache dans values suite à une mise à jour
    this.updateTache = function(tacheUpdated){
        var index = null;
        for(var i in this.values){
            var tache = this.values[i];
            if(tache.id === tacheUpdated.id){
                index = i;
                break;
            }
        }
        if(index !== null){
            tacheUpdated.selected = this.values[index].selected;
            this.values.splice(index, 1, tacheUpdated);
        }
    }
    
    //  INIT
    this.unselectAll();
    TacheService.onTacheUpdated($scope, function(evt, tache){
        this.updateTache(tache);
    }.bind(this));
}]);