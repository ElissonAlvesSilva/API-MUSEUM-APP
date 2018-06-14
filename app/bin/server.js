'use strict'

require('../config/database')('mongodb://localhost/museum');
//require('../config/database')('mongodb://elissonsilva:elisson123@ds135912.mlab.com:35912/rhmobi');
//require('../config/database')('mongodb://ec2-35-167-169-92.us-west-2.compute.amazonaws.com/rhmobi');

const app = require('../config/express');
const port = normalizePort(process.env.PORT || '3500');

app.listen(port, ()=>{
    console.log(`Servidor rodando na porta ${port}`);
});

app.on('error', onError);

module.exports = app;

function normalizePort(val){
    const port = parseInt(val, 10);

    if(isNaN(port)){
        return val;
    }

    if(port >= 0){
        return port;
    }

    return false;
};

function onError(error) {
    if (error.syscall !== 'listen') {
        throw error;
    }

    const bind = typeof port === 'string' ?
        'Pipe ' + port :
        'Port ' + port;

    switch (error.code) {
        case 'EACCES':
            console.error(`${bind} requires elevated privileges`);
            process.exit(1);
            break;
        case 'EADDRINUSE':
            console.error(`${bind} is already in use`);
            process.exit(1);
            break;
        default:
            throw error;
    }
}
