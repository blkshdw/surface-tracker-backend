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
app.use(bodyParser.json({limit: '100mb'}));
app.use(bodyParser.urlencoded({limit: '100mb', extended: true}));
app.set('view engine', 'pug');

app.use('/bumps', bumps);

export default () => { app.listen(config.api.port); }