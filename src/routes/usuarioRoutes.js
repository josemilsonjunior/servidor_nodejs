//EXPORTA FUNÇÃO PARA DEFINIR ROTA USUARIOS EM GET E POST
module.exports = function(app){
    //IMPORTA FUNCOES DO CONTROLLER USUARIOS
    const usuarios = require('../controllers/usuariosController.js');
    app.route('/usuarios')
    .get(usuarios.listAll)
    .post(usuarios.createOne)
}