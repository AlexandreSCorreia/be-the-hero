
exports.up = function(knex) {
    return knex.schema.createTable('incidents', function(table){
        //deixar o id como auto increment
        table.increments();

        table.string('title').notNullable();
        table.string('description').notNullable();
        table.decimal('value').notNullable();

        //criando relacionamento com a ong
        table.string('ong_id').notNullable();
        //criando chave estrangeira
        table.foreign('ong_id').references('id').inTable('ongs');
  });
};

exports.down = function(knex) {
    //vai deletar a tabela
    return knex.schema.dropTable('incidents');
};
