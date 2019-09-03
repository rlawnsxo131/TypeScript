import * as Express from 'express';
import api from './api';

class App {
    application: Express.Application;
    constructor() {
        this.application = Express();
    }
}

const app = new App().application;

app.set('port', process.env.PORT || 4000);

app.use(Express.json());
app.use(Express.urlencoded({extended: false}));
app.use('/api', api);

app.listen(app.get('port'), () => {
    console.log(`connect to ${app.get('port')} port!`);
});
