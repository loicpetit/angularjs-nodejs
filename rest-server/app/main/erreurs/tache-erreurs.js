const CustomError = require('./custom-erreur');

module.exports = {
    'T1' : new CustomError("T1", "La tâche n'existe pas"),
    'T2' : new CustomError("T2", "Plusieurs tâches ont été trouvées pour ces critères")
}