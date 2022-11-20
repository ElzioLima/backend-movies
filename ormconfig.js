module.exports = [
  {
    type: 'postgres',
    url: process.env.DATABASE_URL,
    synchronize: true,
    logging: true,
    cache: {
      type: 'redis',
      duration: 1000 * 60,
      options: {
        url: process.env.REDIS_TLS_URL
      },
      ignoreErrors: true
    },
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