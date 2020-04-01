const connection = require('../database/connection');

module.exports = {

    async index (request,response){
        //criar um esquema de paginação para não retornar todos os dados de uma só vez
        const {page = 1} = request.query;

        //retornar a quantidade de dados
        const [count] = await connection('incidents').count();
       
        const incidents = await connection('incidents')
        //Pegando dados da ong tambem
        .join('ongs', 'ongs.id', '=', 'incidents.ong_id')
        //limitando os dados que seram retornados
        .limit(5)
        //pular 5 registros por pagina
        .offset((page - 1) * 5)
        .select([
            'incidents.*',
            'ongs.name',
            'ongs.email',
            'ongs.whatsapp',
            'ongs.city',
            'ongs.uf'
        ]);
       
        response.header('X-Total-Count', count['count(*)']);

        return response.json(incidents);
    },

    async create(request,response){
    const { title, description, value } = request.body;
    const ong_id = request.headers.authorization;

    //Criar a conexão com o banco de dados
    const [id] = await connection('incidents').insert({
        title,
        description,
        value,
        ong_id,
    });

    return response.json({id});

    },   

    async delete (request,response){
        const { id } = request.params;
        const ong_id = request.headers.authorization;

        //Verificando se o caso que será deletado pertence a ong logada
        const incident = await connection('incidents')
        .where('id',id)
        .select('ong_id')
        .first();
    
        if(incident.ong_id != ong_id){
            return response.status(401).json({
                error: 'Operation not permitted.'
            });
        }

        //Deletando caso
        await connection('incidents').where('id',id).delete();
        //status(204) é quando vai retornar uma responsta pro font sem conteudo
        //Send é para enviar os dados sem corpo nenhum vazia
        return response.status(204).send();
    },
};