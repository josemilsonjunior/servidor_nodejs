//EXPORTA FUNCAO COM A LISTAGEM DE VARIOS USUARIOS
exports.listAll = (req, res) => {
    let usuarios = [
        {
            nome: 'teste 01',
            email: 'teste@123.com'
        }, 
        {
            nome: 'teste 02',
            email: 'teste2@123.com'
        },
        {
            nome: 'teste 03',
            email: 'teste3@123.com'
        }
    ]
    res.send(usuarios);
}

//EXPORTA FUNCAO DANDO RETORNO DE MENSAGEM DE CONFIRMAÇÃO 
//E CONTEÚDO DO CORPO DA REQUISIÇÃO.
exports.createOne = (req, res) => {
    let response = {
        mensage: "Usuário criado com sucesso",
        data: req.body
    }
    res.send(response);
}