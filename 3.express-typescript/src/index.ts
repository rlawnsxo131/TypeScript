import express from 'express';
import api from './api';

class App {
    public application: express.Application;
    constructor() {
        this.application = express();
    }
}

const app = new App().application;

app.set('port', process.env.PORT || 4000);

app.use(express.json());
app.use(express.urlencoded({extended: false}));
app.use('/api', api);

app.listen(app.get('port'), () => {
    console.log(`connect to ${app.get('port')} port!`);
});



