exports.up = knex => {
  return knex.schema.createTable('users', t => {
    t.increments('id').primary().unsigned()
    t.string('username').notNullable().unique().index()
    t.string('password').notNullable()
    t.string('email').notNullable().unique().index()
    t.timestamp('created_at').defaultTo(knex.fn.now())
    t.timestamp('updated_at').defaultTo(knex.fn.now())
  })
}

exports.down = knex => {
  return knex.schema.dropTable('users')
}