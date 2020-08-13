import axios from 'axios';

const baseURL = process.env.API_URL;

export const http = axios.create({ baseURL });
