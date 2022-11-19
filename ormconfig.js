module.exports = [
  {
    type: 'postgres',
    url: process.env.HEROKU_POSTGRESQL_ROSE_URL,
    synchronize: true,
    logging: true,
    ssl: {
      rejectUnauthorized: false
    },
    migrations: [
      `${process.env.TS_NODE_DEV === undefined ? 'dist' : 'src'}/infra/repos/postgres/migrations/*.{js,ts}`
    ],
    entities: [
      `${process.env.TS_NODE_DEV === undefined ? 'dist' : 'src'}/infra/repos/postgres/entities/index.{js,ts}`
    ],
    cli: {
      migrationsDir: `${process.env.TS_NODE_DEV === undefined ? 'dist' : 'src'}/infra/repos/postgres/migrations/`
    }
  }
]