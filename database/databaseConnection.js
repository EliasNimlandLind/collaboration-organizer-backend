import postgres from 'postgres';

const sql = postgres('postgres://postgres:admin@localhost:5432/postgres', {
	host: 'localhost',
	port: 5432,
	database: 'postgres',
	username: 'postgres',
	password: 'admin',
});

export default sql;
