import express from 'express';

import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';

import { getUserFromDatabase } from '../database/user.js';

export const router = express.Router();

router.post('/api/login', async (request, response) => {
	const { username, password } = request.body;

	const user = await getUserFromDatabase(username);
	if (!user) {
		return response.status(400).json({ message: 'User not found' });
	}
	const isPasswordValid = bcrypt.compareSync(password, user.password_hash);
	if (!isPasswordValid) {
		return response.status(401).json({ message: 'Invalid credentials' });
	}
	const token = jwt.sign({ username }, 'your_jwt_secret', { expiresIn: '1h' });
	response.json({ token });
});

export default router;
