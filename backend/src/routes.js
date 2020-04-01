const express = require('express');

const OngController = require('./controllers/OngController');
const IncidentsController = require('./controllers/IncidentsController');
const ProfireController = require('./controllers/ProfireController');
const SessionController = require('./controllers/SessionController');

const connection = require('./database/connection');

const routes = express.Router();

/*routes.post('/users',(request, response)=>{

    const params = request.body;

    console.log(params);

    return response.json({
        evento: 'Semana OmniStack 11.0',
        aluno: 'Alexandre Correia'
    });

});*/

//Criando uma session na aplicação "Login"
routes.post('/sessions', SessionController.create);
//Criando uma rota para listar ongs
routes.get('/ongs', OngController.index);
//Criar uma ong
routes.post('/ongs', OngController.create);
//Buscar todos incidentes da ong logada
routes.get('/profire',ProfireController.index);

//Criando uma rota para listar incidents
routes.get('/incidents', IncidentsController.index);
//Criar uma incidents
routes.post('/incidents', IncidentsController.create);
//deletar incident
routes.delete('/incidents/:id', IncidentsController.delete);



module.exports = routes;