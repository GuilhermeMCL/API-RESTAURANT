import { env } from './env'
import { Knex, knex as setupKnex } from 'knex'

export const config: Knex.Config = {
  client: 'sqlite',
  connection: {
    filename: env.DATABASE_URL,
  },
    migrations: {
    extension: 'ts',
    directory: './src/database/migrations',
  },
  useNullAsDefault: true,
}

export const knex = setupKnex(config)