import { api } from '$lib/api';

export const GET = ({ request }) => api.fetch(request);
