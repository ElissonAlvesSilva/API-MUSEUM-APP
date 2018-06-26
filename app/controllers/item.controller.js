'use strict'

const mongoose = require('mongoose');
const item = mongoose.model('item');

/* GET */
exports.listar = (request, response) => {
    item.find({})
        .then(data => {
            response.status(200).send({
                status: 'sucesso',
                message: 'sucesso ao retornar lista de itens',
                records: {
                    item: data
                }
            });
        })
        .catch(error => {
            response.status(404).send({
                status: 'sucesso',
                message: 'error ao retornar lista de itens',
                stack: error
            });
        });
};

exports.lista_por_id = (request, response) => {
    item.findOne({
            uniqueId: request.params.uniqueId
        })
        .then(data => {
            response.status(200).send({
                status: 'sucesso',
                message: 'sucesso ao retornar o item',
                records: data
            });
        })
        .catch(error => {
            response.status(404).send({
                status: 'sucesso',
                message: 'error ao retornar o item',
                stack: error
            });
        });
};

/* POST */

exports.criar_item = (request, response) => {
    if (request.file) {
        let jsonObject = JSON.parse(creatPost(request.body, request.file.path));
        item.create(jsonObject)
            .then(data => {
                response.status(201).send({
                    status: 'sucesso',
                    message: 'sucesso ao cadastrar o item',
                    records: data
                })
            }).catch(error => {
                response.status(404).send({
                    status: 'sucesso',
                    message: 'error ao cadastrar o item',
                    stack: error
                });
            });
    } else {
        let jsonObject = JSON.parse(creatPostWithoutFile(request.body));
        item.create(jsonObject)
            .then(data => {
                response.status(201).send({
                    status: 'sucesso',
                    message: 'sucesso ao cadastrar o item',
                    records: data
                })
            }).catch(error => {
                response.status(404).send({
                    status: 'sucesso',
                    message: 'error ao cadastrar o item',
                    stack: error
                });
            });
    }
};

/* PUT */

exports.alterar_item = (request, response) => {
    if (request.file) {
        let jsonObject = JSON.parse(creatPost(request.body, request.file.path));
        item.findByIdAndUpdate(request.params.id, jsonObject)
            .then(data => {
                response.status(201).send({
                    status: 'sucesso',
                    message: 'sucesso ao alterar o item',
                    records: data
                })
            }).catch(error => {
                response.status(404).send({
                    status: 'sucesso',
                    message: 'error ao alterar o item',
                    stack: error
                });
            });
    } else {
        let jsonObject = JSON.parse(creatPostWithoutFile(request.body));
        item.findByIdAndUpdate(request.params.id, jsonObject)
            .then(data => {
                response.status(201).send({
                    status: 'sucesso',
                    message: 'sucesso ao alterar o item',
                    records: data
                })
            }).catch(error => {
                response.status(404).send({
                    status: 'sucesso',
                    message: 'error ao alterar o item',
                    stack: error
                });
            });
    }
};

/* DELETE */
exports.remover_item = (request, response) => {
    item.findOneAndRemove(request.params.id)
        .then(data => {
            response.status(200).send({
                status: 'sucesso',
                message: 'sucesso ao remover o item',
                records: data
            })
        }).catch(error => {
            response.status(404).send({
                status: 'sucesso',
                message: 'error ao remover o item',
                stack: error
            });
        });
};


function creatPost(params, path) {
    let content;

    content = JSON.stringify({
        nome: params.nome,
        dataCriacao: params.dataCriacao,
        descricao: params.descricao,
        dataAquisicao: params.dataAquisicao,
        artista: params.artista,
        imgUrl: removeRootPath(path)
    });

    return content;
}

function creatPostWithoutFile(params) {
    let content;
    content = JSON.stringify({
        nome: params.nome,
        dataCriacao: params.dataCriacao,
        descricao: params.descricao,
        dataAquisicao: params.dataAquisicao,
        artista: params.artista
    });

    return content;
}


function removeRootPath(path) {
    let _path = path;
    _path = _path.replace('app/public/', '');
    return _path;
}