const db = require('../database/dbConfig');

module.exports = {
	add,
	find,
	findBy,
	findById,
	update,
	remove
};

// Create user
async function add(user) {
	const [id] = await db('users').insert(user);

	return db('users')
		.where({ id })
		.first();
}

// Get all users
async function find() {
	return db('users');
}
