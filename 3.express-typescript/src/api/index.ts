import { Router } from 'express';
import hello from './hello';

const api = Router();

api.use('/hello', hello);

export default api;
