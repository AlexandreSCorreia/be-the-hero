//Responsavel por criar a tablela
exports.up = function(knex) {
  return knex.schema.createTable('ongs', function(table){
        table.string('id').primary();
        table.string('name').notNullable();
        table.string('email').notNullable();
        table.string('whatsapp').notNullable();
        table.string('city').notNullable();
        table.string('uf',2).notNullable();
  });
};

//se por acaso der algum problema na criação da tabela
//esse metodo é responsavel por desfazer o que foi feito
exports.down = function(knex) {
    //vai deletar a tabela
   return knex.schema.dropTable('ongs');
};
