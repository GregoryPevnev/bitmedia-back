exports.up = async function (knex) {
  await knex.schema.createTable("users", builder => {
    builder.integer("id").primary("USERS_PK");
    builder.string("first_name", 255).notNullable();
    builder.string("last_name", 255).notNullable();
    builder.string("email", 255).notNullable();
    builder.string("gender", 255).notNullable();
    builder.string("ip_address", 255).notNullable();
  });

  await knex.schema.createTable("users_statistic", builder => {
    builder.integer("user_id").notNullable();
    builder.date("date").notNullable();
    builder.integer("page_views").notNullable();
    builder.integer("clicks").notNullable();

    builder.primary(["user_id", "date"], "STATS_PK");
    builder.foreign("user_id", "STATS_USERS_FK")
      .references("id")
      .inTable("users")
      .onDelete("CASCADE");
  });
};

exports.down = async function (knex) {
  await knex.schema.dropTable("users_statistic");

  await knex.schema.dropTable("users");
};
