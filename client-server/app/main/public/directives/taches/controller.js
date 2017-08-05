app.controller('TachesDirectiveController', ['ConfirmModal', 'TacheModal', 'TacheService', function (ConfirmModal, TacheModal, TacheService) {
    this.unselectAll = function () {
        for (var i in this.values) {
            this.values[i].selected = false;
        }
    }
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
    this.add = function () {
        TacheModal.open().then(function (tache) {
            TacheService.create(tache).then(function (tacheCreated) {
                this.values.push(tacheCreated);
            }.bind(this));
        }.bind(this));
    };
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
    //  INIT
    this.unselectAll();
}]);