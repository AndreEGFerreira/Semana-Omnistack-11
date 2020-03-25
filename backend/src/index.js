const express = require('express');
const routes = require('./routes');
const cors = require('cors');

const app = express();

app.use(cors());
app.use(express.json()); //falar para o express transformar json em codigo javascript
app.use(routes);

/**
 * Metodos HTTP:
 * 
 * GET: buscar info do banco
 * POST: Criar info no banco
 * PUT: Alterar info
 * DELETE: Deletar info
 */

 /**
  * Parametros:
  * 
  * Query: Parametros nomeados na rota após "?" servindo para filtro, paginação, etc
  * Route: Parametros utilizados para recursos
  * Request Body: Corpo da requisição para criar ou alterar usuario
  */
 
  /**
   * Busca BD
   * 
   * Driver: SELECT * FROM users;
   * Query Builder: table('users').select('*');
   */

app.listen(3333);
