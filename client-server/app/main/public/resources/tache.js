app.factory('TacheResource', ['$resource', function ($resource) {

    var TACHES_URL = '/rest/taches';
    var TACHE_URL = TACHES_URL + '/:id';

    return $resource('/', {}, {
        'findAll': {
            method: 'GET',
            url: TACHES_URL
        },
        'find': {
            method: 'GET',
            url: TACHE_URL
        },
        'create': {
            method: 'POST',
            url: TACHES_URL
        },
        'update': {
            method: 'PUT',
            url: TACHE_URL
        },
        'delete': {
            method: 'DELETE',
            url: TACHE_URL
        }
    });

}]);