const CustomError = require('../common/custom-error');

module.exports = {
    'T1' : new CustomError("T1", "La tâche n'existe pas"),
    'T2' : new CustomError("T2", "Plusieurs tâches ont été trouvées pour ces critères")
}