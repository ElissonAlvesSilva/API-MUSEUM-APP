'use strict';

const mongoose = require('mongoose');

const itemSchema = mongoose.Schema({
    nome: {
        type: String,
        require: [true, 'O nome é requerido']
    },
    dataCriacao: {
        type: Date,
        require: [true, 'A data de criação é requerida']
    },
    descricao: {
        type: String,
        require: [true, 'A descrição é requerida']
    },
    dataAquisicao: {
        type: Date,
        require: [true, 'A data de aquisição é requerida']
    },
    artista: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'item'
    },
    imgUrl: {
        type: String
    }
});

mongoose.model('item', itemSchema);