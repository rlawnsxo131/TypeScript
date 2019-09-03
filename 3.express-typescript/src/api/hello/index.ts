import { Router } from 'express';

const hello = Router();

hello.get('/', (req, res, next) => {
    res.send('hello');
});

export default hello;