import express from 'express';
const hello = express.Router();

hello.get('/', (req, res, next) => {
    res.send('hello');
});

export default hello;