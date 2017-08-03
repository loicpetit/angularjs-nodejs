app.controller('TachesDirectiveController', [function () {
    this.unselectAll = function() {
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
        alert('add');
    };
    this.delete = function (tache) {
        alert('delete: ' + tache.id);
    };
    //  INIT
    this.unselectAll();
}]);