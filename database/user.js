import sql from './databaseConnection.js';

export async function insertUserIntoDatabase(username, passwordHash) {
	try {
		const users = await sql`
    insert into users
    (username, password_hash)
    values
      (${username}, ${passwordHash})
    returning username, password_hash
  `;
	} catch (error) {
		console.error('Error fetching user from database:', error);
	}
}

export async function getUserFromDatabase(username) {
	try {
		const users = await sql`
			SELECT *
			FROM public.users
			WHERE username = ${username}
		`;
		if (users.length > 0) {
			console.log(users[0]);
			return users[0];
		}

		return null;
	} catch (error) {
		console.error('Error fetching user from database:', error);
	}
}

export async function IsUsernameExisting(username) {
	try {
		const users = await sql`
        SELECT
        *
        FROM public.users
        WHERE username = ${username}
    `;

		if (users.length > 0) {
			return true;
		}
		return false;
	} catch (error) {
		console.error('Error fetching user from database:', error);
	}
}
