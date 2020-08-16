//IMPORTA MODELO DE USUARIO DO SEQUELIZE
const Usuario = require('../models').Usuario;

//LISTA DE TODOS OS USUÁRIOS SALVOS NO BANCO
exports.listAll = (req, res) => {
    Usuario.findAll().then(usuarios => {
        res.send(usuarios);
    }).catch(error => {
        res.send(error);
    })
}

//SALVA NO BANCO O USUARIO 
exports.createOne = (req, res) => {
    console.log(Usuario);
    const {nome, email} = req.body;
    Usuario.create({nome, email}).then(usuario => {
        res.send(usuario);
    }).catch(error => {
        res.send(error);
    });
}