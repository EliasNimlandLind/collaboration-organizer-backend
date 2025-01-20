import express from 'express';
import bcrypt from 'bcryptjs';

import {
	insertUserIntoDatabase,
	IsUsernameExisting,
} from '../database/user.js';

export const router = express.Router();

router.post('/api/register', async (req, res) => {
	const { username, password } = req.body;
	if (!username || !password) {
		return res
			.status(400)
			.json({ message: 'Username and password are required' });
	}

	const usernameExists = await IsUsernameExisting(username);
	console.log(usernameExists);
	if (usernameExists === true) {
		return res
			.status(400)
			.json({ message: 'Username exists already, choose another one' });
	}

	const hashedPassword = bcrypt.hashSync(password, 8);

	insertUserIntoDatabase(username, hashedPassword);
	res.status(201).json({ message: 'User registered successfully!' });
});
export default router;
