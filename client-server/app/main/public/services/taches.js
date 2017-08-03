app.factory('TachesService', [function () {

    var factory = {};

    var taches = [
        {
            id: 1,
            dateCreation: new Date(2017, 8, 8),
            dateModification: new Date(2017, 9, 9),
            libelle: 'tache 1'
        },
        {
            id: 2,
            dateCreation: new Date(2017, 10, 10),
            dateModification: null,
            libelle: 'tache 2'
        }
    ];

    factory.findAll = function () {
        return taches;
    }

    return factory;

}]);