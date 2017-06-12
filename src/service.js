import { sync } from './model';
import rest from './rest';

async function start() {
    await sync({force: true});
    rest();
    console.log('Server ready');
}

start();