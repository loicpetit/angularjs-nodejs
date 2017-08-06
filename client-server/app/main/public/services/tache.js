app.factory('TacheService', ['$rootScope', 'TacheResource', function ($rootScope, TacheResource) {

    var TACHE_UPDATED_EVENT = 'tache.updated';

    var factory = {};

    /**
     * Recherche toutes les taches par defaut.
     * @criteria: un objet pour filtrer les taches, optionnel
     */
    factory.findAll = function (criteria) {
        return TacheResource.findAll(criteria).$promise.then(function (response) {
            return response.taches;
        });
    }

    /**
     * Recherche une tache
     * @id: l'id de la tache à trouver
     */
    factory.find = function (id) {
        return TacheResource.find({id: id}).$promise.then(function (response) {
            return response.tache;
        });
    }

    /**
     * Vérifie si une tache est valide. 
     * @return true si valide, sinon false
     */
    factory.validate = function (tache) {
        if (angular.isUndefined(tache) || tache === null) {
            return false;
        }
        if (angular.isUndefined(tache.libelle) || tache.libelle === null || tache.libelle.trim() === '') {
            return false;
        }
        return true;
    }

    /**
     * Vérifie si une tache est valide. Envoie une exception si la tache n'est pas valide.
     */
    factory.check = function (tache) {
        if (!factory.validate(tache)) {
            throw 'Tache non valide';
        }
    }

    /**
     * Crée une nouvelle tache
     */
    factory.create = function (tache) {
        return TacheResource.create({}, { tache: tache }).$promise.then(function (response) {
            return response.tache
        });
    }

    factory.update = function (tache) {
        return TacheResource.update({id: tache.id}, { tache: tache }).$promise.then(function (response) {
            $rootScope.$broadcast(TACHE_UPDATED_EVENT, response.tache)
            return response.tache
        });
    }

    factory.delete = function (tacheId) {
         return TacheResource.delete({id: tacheId}).$promise;
    }

    /**
     * Bind un scope sur l'update d'une tache
     * @$scope: le scope courant
     * @callback: function(evt, tache)
     */
    factory.onTacheUpdated = function($scope, callback){
        $scope.$on(TACHE_UPDATED_EVENT, callback);
    }

    return factory;

}]);