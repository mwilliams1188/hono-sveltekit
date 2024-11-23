import type { RequestHandler } from '@sveltejs/kit';
import { Hono } from 'hono';

const app = new Hono().basePath('/api');

app.get('/hello', (c) => {
	return c.json({
		message: 'Hello from Hono!'
	});
});

app.get('/:wild', (c) => {
	const wild = c.req.param('wild');
	return c.json({
		message: `Hello from Hono! You're now on /api/${wild}!`
	});
});

export const GET: RequestHandler = ({ request }) => app.fetch(request);
