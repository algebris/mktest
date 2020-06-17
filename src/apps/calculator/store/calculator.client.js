import { http } from 'lib/http';

export const postOperation = (payload) => http.post('/operation', payload);
