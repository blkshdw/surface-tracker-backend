import process from 'process';

let environment = process.argv[2];

if (environment === undefined || environment === null) {
    environment = 'local';
}

const config = require('./' + environment + '.json');

export default config;