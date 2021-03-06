exports.up = knex => {
  return knex.schema.createTable('companies', t => {
    t.increments('id').primary().unsigned()
    t.string('name').notNullable().index()
    t.boolean('developer').defaultTo(false)
    t.boolean('publisher').defaultTo(false)
    t.timestamp('created_at').defaultTo(knex.fn.now())
    t.timestamp('updated_at').defaultTo(knex.fn.now())
  })
}

exports.down = knex => {
  return knex.schema.dropTable('companies')
}