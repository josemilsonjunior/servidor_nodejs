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

//IMPORTA E DEFINE ROTA PARA USUARIOS
const routesUsuarios = require('./src/routes/usuarioRoutes.js');
routesUsuarios(app);

//DEFININDO ROTA DE REQUISIÇÃO RAIZ
app.route('/')
    .get((req, res) => {
        res.send('API TodDoList funcionando!');
    });
    
//DEFININDO PORTA QUE O SERVIDOR VAI OUVIR
app.listen(port);
console.log("Servidor Iniciado: ", port);