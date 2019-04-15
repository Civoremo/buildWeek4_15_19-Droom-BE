const localPg = {
	host: process.env.DB_HOST,
	database: process.env.DB_NAME,
	user: process.env.DB_USER,
	password: process.env.DB_PASS
};
const pg = require('pg');
pg.defaults.ssl = true;

const dbConnection = process.env.DATABASE_URL || localPg; // used to prevent random errors

module.exports = {
	development: {
		client: 'sqlite3',
		useNullAsDefault: true,
		connection: {
			filename: './database/dev.sqlite3'
		},
		pool: {
			afterCreate: (conn, done) => {
				conn.run('PRAGMA foreign_keys = ON', done);
			}
		},
		migrations: {
			directory: './database/migrations'
		},
		seeds: {
			directory: './database/seeds'
		}
	},

	staging: {
		client: 'postgresql',
		connection: {
			database: 'my_db',
			user: 'username',
			password: 'password'
		},
		pool: {
			min: 2,
			max: 10
		},
		migrations: {
			directory: './database/migrations'
		},
		seeds: {
			directory: './database/seeds'
		}
	},

	production: {
		client: 'pg',
<<<<<<< HEAD
		connection: productionDbConnection,
		useNullAsDefault: true,
=======
		connection: dbConnection,
		useNullAsDefault: true, // used to avoid warning on console
>>>>>>> a18aa206a39835a57c7da98a25e3246729f74299
		migrations: {
			directory: './database/migrations'
		},
		seeds: {
			directory: './database/seeds'
		}
	}
};
