'use strict';

const mongoose = require('mongoose');

const artistSchema = mongoose.Schema({
    nome: {
        type: String,
        require: [true, 'O nome é requerido']
    },
    dataNascimento: {
        type: Date,
        require: [true, 'A data de Nascimento é requerida']
    },
    localNascimento: {
        type: String,
        require: [true, 'A local de nascimento é requerida']
    },
    dataMorte: {
        type: Date,
        require: [true, 'A data de Nascimento é requerida']
    },
    imgUrl: {
        type: String
    }
});

mongoose.model('artista', artistSchema);