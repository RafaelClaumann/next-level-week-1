import knex from 'knex'
import path from 'path'

const connection = knex(
  {
    client: 'sqlite3',
    connection: {
      filename: path.resolve(__dirname, 'database.sqlite')
    },
    useNullAsDefault: true,
    pool: {
      afterCreate: (connection: any, callback: any) => {
        connection.run('PRAGMA foreign_keys=ON', callback)
      }
    }
  }
)

export default connection
