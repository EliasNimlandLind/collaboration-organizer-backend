import express from 'express';
import cors from 'cors';

import registerRouter from './routes/register.js';
import loginRouter from './routes/login.js';
import protectedRouter from './routes/protected.js';
import articleRouter from './routes/article.js';

const app = express();

app.use(cors());
app.use(express.json());

app.use(registerRouter);
app.use(loginRouter);
app.use(protectedRouter);
app.use(articleRouter);

const port = 3000;
app.listen(port, () => {
	console.log('\n'.repeat(process.stdout.rows));
	const date = new Date();
	console.log(
		`Backend API running at http://localhost:${port}, started`,
		date.toLocaleTimeString(),
		'\n'
	);
});
