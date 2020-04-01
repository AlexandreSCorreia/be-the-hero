const express = require('express');

const cors = require('cors');
//Importar as rotas
const routes = require('./routes');
//Criando a minha aplicação
const app = express();

app.use(cors());
//Informando ao app que está sendo utilizado json para requisições
app.use(express.json ());
//usar o routes
app.use(routes);
//Criando a primeira rota
//  endereço da rota isso '/' é a rota raiz do node
//apos isso passa uma função
/*app.get('/',(request, response)=>{
    //response para dar uma resposta
    //send para passar uma mensagem
    //return response.send('Hello world');
    //retornando um arquivo no formato json
    return response.json({
        evento: 'Semana OmniStack 11.0',
        aluno: 'Alexandre Correia'
    });
});*/
/**
 * Rota /Recurso
 */

 /**
  * Metodos HTTP
  * 
  * GET: Buscar/listar uma informação do back-end
  * POST: Criar uma informação no back-end
  * PUT: Alterar uma informação no back-end
  * DELETE: Deletar uma informação no back-end
  */


  /**
   * Tipos de parametros:
   * 
   * Query Params: Parametros nomeados enviados na rota apos
   *  o simbolo de '?' servem para filtros,paginação
   * 
   * Route Params: Parametros para identificar recursos
   * 
   * Request Body: Corpo da requisição utilizado para criar 
   */

/**
 * SQL: MySQL, SQLite, PostgreSQL, Oracle, Microsoft SQL Server
 * NoSQL: MongoDB, CouchDB, etc
 */

 /**
  * Driver: SELECT * From users
  * Query Builder('users').select('*').where()
  */

  
//rotas
//esse caminho é chamado de recurso '/users'
/*app.get('/users',(request, response)=>{
    //response para dar uma resposta
    //send para passar uma mensagem
    //return response.send('Hello world');
    //retornando um arquivo no formato json
    return response.json({
        evento: 'Semana OmniStack 11.0',
        aluno: 'Alexandre Correia'
    });
});*/



//Colocar a aplicação para ouvir a porta 3333
app.listen(3333);