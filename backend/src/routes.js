const express = require('express');

const OngController = require('./controllers/OngController');
const IncidentController = require('./controllers/IncidentController');
const ProfileController = require('./controllers/ProfileController');
const SessionController = require('./controllers/SessionController');

const routes = express.Router();

/** routes.get('/users/:id', (request, response) => { // "/:id" = route, colocando um número no lugar do ":id" retornará o resultado buscado
    const params = request.params; // aqui ele pega os parametros buscados no id

    console.log(params); //printar no terminal
})

routes.post('/users/', (request, response) => { // usando erquest body
    const body = request.body; //pegar o body da requisição

    console.log(body); //printar no terminal
})
*/

routes.post('/sessions', SessionController.create); // Cria ongs

routes.get('/ongs', OngController.index); // Lista ongs
routes.post('/ongs', OngController.create); // Cria ongs

routes.get('/profile', ProfileController.index);

routes.post('/incidents', IncidentController.create);
routes.get('/incidents', IncidentController.index);
routes.delete('/incidents/:id', IncidentController.delete);

module.exports = routes;