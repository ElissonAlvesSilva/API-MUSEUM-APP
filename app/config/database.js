module.exports = (uri)=>{

    const mongoose = require('mongoose');

    mongoose.connect(uri);

    mongoose.connection.on('connected', ()=>{
        console.log('Conectado ao MongoDB');
    });

    mongoose.connection.on('disconnected', ()=>{
        console.log('Disconectado do MongoDB');
    });

    mongoose.connection.on('error', (error)=>{
        console.log(`Erro de conexão ${error}`);
    });

    process.on('SIGINT', ()=>{
        mongoose.connection.close(()=>{
            console.log('Aplicação terminada, conexão terminada');
        });
    });
};