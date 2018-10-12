exports.up = knex => {
  return knex.schema.createTable('games', t => {
    t.increments('id').primary().unsigned()
    t.string('name').notNullable().index()
    t.integer('company_developer_id').unsigned()
    t.foreign('company_developer_id').references('id').inTable('companies')
    t.integer('company_publisher_id').unsigned()
    t.foreign('company_publisher_id').references('id').inTable('companies')
    t.timestamp('date')
    t.timestamp('created_at').defaultTo(knex.fn.now())
    t.timestamp('updated_at').defaultTo(knex.fn.now())
  })
}

exports.down = knex => {
  return knex.schema.dropTable('games')
}