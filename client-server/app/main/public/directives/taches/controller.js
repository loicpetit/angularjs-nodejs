app.controller('TachesDirectiveController', ['ConfirmModal', 'TacheModal', function (ConfirmModal, TacheModal) {
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
        TacheModal.open().then(function(tache){
            console.log('add tache: ', tache);
            //  save
            this.values.push(tache);
        }.bind(this));
    };
    this.delete = function ($event, tache) {
        $event.stopPropagation();
        ConfirmModal.open('Supprimer une tâche', 'Êtes-vous sûr de vouloir supprimer cette tâche ?').then(function () {
            console.log('Supprime tache ' + tache.id);
            //  delete
            //  remove in current list
            this.values = this.values.filter(function (item, index, array) {
                return item.id !== tache.id;
            });
        }.bind(this), function () {
            //  Ne rien faire si annulé
        });
    };
    //  INIT
    this.unselectAll();
}]);