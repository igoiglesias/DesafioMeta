exports.up = function(knex) {
    return knex.schema.createTable('contatos', function(table){
        table.increments('id');
        table.string('nome').notNullable();
        table.string('canal').notNullable();
        table.string('valor').notNullable();
        table.string('obs').notNullable();

    });
};

exports.down = function(knex) {
  return knex.schema.dropTable('contatos');
};
