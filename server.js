//IMPORTAR MODULO EXPRESS E BODYPARSER
const express = require('express');
const bodyParser = require('body-parser');

//INSTANCIA O EXPRESS E DEFINE A PORTA
const app = express();
const port = process.env.PORT || 3000;

//DEFINIR O BODYPARSER
//(FILTRA A INF. FORMULÁRIOS DO BODY)
app.use(bodyParser.urlencoded({extended: true}));
//(FILTRA A INF. JSON DO BODY)
app.use(bodyParser.json());

//DEFININDO ROTAS DE REQUISIÇÃO RAIZ
app.route('/')
    .get((req, res) => {
        res.send('Respondendo no método GET Raiz');
    })
    .post((req, res) => {
        res.send('Respondendo no método POST Raiz');
    });

//DEFININDO ROTAS DE REQUISIÇÃO PARA USUÁRIOS
app.route('/usuarios')
    .get((req, res) => {
        res.send('Respondendo no método GET em Usuários');
    })
    .post((req, res) => {
        res.send('Respondendo no método POST em Usuários');
    });

//DEFININDO PORTA QUE O SERVIDOR VAI OUVIR
app.listen(port);
console.log('Servidor Funcionando, na porta: ', port);