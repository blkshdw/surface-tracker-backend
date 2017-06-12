import express from 'express';
import bodyParser from 'body-parser';
import cookiesParser from 'cookie-parser';
import config from '../config';

import bumps from './bumps';

const app = express();

app.get('/', (req, res) => {
   res.send({ status: 'ok' });
});


app.use(cookiesParser());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.set('view engine', 'pug');

app.use('/bumps', bumps);

export default () => { app.listen(config.api.port); }