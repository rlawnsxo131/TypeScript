import express from 'express';
import hello from './hello';

const api = express.Router();

api.use('/hello', hello);

export default api;
