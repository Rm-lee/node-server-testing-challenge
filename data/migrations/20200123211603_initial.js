
exports.up = async function(knex) {
  await knex.schema.createTable("cars",(table) => {
      table.increments()
      table.string("make").notNullable()
      .unique()
      .table.string("models").notNullable()
  })
};

exports.down = async function(knex) {
  await knex.schema.droptableIfExists("cars")
};
