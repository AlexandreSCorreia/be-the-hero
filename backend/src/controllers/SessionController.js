const connection = require('../database/connection');

module.exports = {

    async create (request,response){
        //capturando id informado
        const { id } = request.body;
        //Buscando id da ong no banco de dados
        const ong = await connection('ongs')
        .where('id',id)
        .select('name')
        //Como eu sei que só v ai retornar apenas um resultado
        //o first() inpede ele de me retornar um array
        .first();
        
        if(!ong){
            return response.status(400).json({
                error: 'No ONG found with this ID.'
            });
        }

        return response.json(ong);
    }
};