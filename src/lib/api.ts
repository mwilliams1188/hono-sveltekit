import { Hono } from 'hono';

const app = new Hono().basePath('/api');

app.get('/hello', (c) => {
	return c.json({
		message: 'Hello from Hono on Vercel!'
	});
});

app.get('/:wild', (c) => {
	const wild = c.req.param('wild');
	return c.json({
		message: `Hello from Hono on Vercel! You're now on /api/${wild}!`
	});
});

export const api = app;
export type Router = typeof app;
