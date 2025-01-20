import express from 'express';
import { expressjwt as expressJwt } from 'express-jwt';

export const router = express.Router();

router.get(
	'/api/protected',
	expressJwt({ secret: 'your_jwt_secret', algorithms: ['HS256'] }),
	(request, response) => {
		response.json({
			message: 'This is a protected route',
			user: request.user,
		});
	}
);

export default router;
