const moment = require('moment');

exports.updateMetadata = function (entite) {
    if (entite.id === null) {
        entite.dateCreation = moment();
        entite.dateModification = null;
    } else {
        entite.dateModification = moment();
    }
}