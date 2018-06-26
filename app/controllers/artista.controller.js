'use strict'

const mongoose = require('mongoose');
const artista = mongoose.model('artista');

/* GET */
exports.listar = (request, response) => {
    artista.find({})
        .then(data => {
            response.status(200).send({
                status: 'sucesso',
                message: 'sucesso ao retornar lista de artistas',
                records: {
                    artista: data
                }
            });
        })
        .catch(error => {
            response.status(404).send({
                status: 'sucesso',
                message: 'error ao retornar lista de artistas',
                stack: error
            });
        });
};

exports.lista_por_id = (request, response) => {
    artista.findOne({
            uniqueId: request.params.uniqueId
        })
        .then(data => {
            response.status(200).send({
                status: 'sucesso',
                message: 'sucesso ao retornar o artista',
                records: data
            });
        })
        .catch(error => {
            response.status(404).send({
                status: 'sucesso',
                message: 'error ao retornar o artista',
                stack: error
            });
        });
};

/* POST */

exports.criar_artista = (request, response) => {
    if (request.file) {
        let jsonObject = JSON.parse(creatPost(request.body, request.file.path));
        artista.create(jsonObject)
            .then(data => {
                response.status(201).send({
                    status: 'sucesso',
                    message: 'sucesso ao cadastrar o artista',
                    records: data
                })
            }).catch(error => {
                response.status(404).send({
                    status: 'sucesso',
                    message: 'error ao cadastrar o artista',
                    stack: error
                });
            });
    } else {
        let jsonObject = JSON.parse(creatPostWithoutFile(request.body));
        artista.create(jsonObject)
            .then(data => {
                response.status(201).send({
                    status: 'sucesso',
                    message: 'sucesso ao cadastrar o artista',
                    records: data
                })
            }).catch(error => {
                response.status(404).send({
                    status: 'sucesso',
                    message: 'error ao cadastrar o artista',
                    stack: error
                });
            });
    }
};

/* PUT */

exports.alterar_artista = (request, response) => {
    if (request.file) {
        let jsonObject = JSON.parse(creatPost(request.body, request.file.path));
        artista.findByIdAndUpdate(request.params.id, jsonObject)
            .then(data => {
                response.status(201).send({
                    status: 'sucesso',
                    message: 'sucesso ao alterar o artista',
                    records: data
                })
            }).catch(error => {
                response.status(404).send({
                    status: 'sucesso',
                    message: 'error ao alterar o artista',
                    stack: error
                });
            });
    } else {
        let jsonObject = JSON.parse(creatPostWithoutFile(request.body));
        artista.findByIdAndUpdate(request.params.id, jsonObject)
            .then(data => {
                response.status(201).send({
                    status: 'sucesso',
                    message: 'sucesso ao alterar o artista',
                    records: data
                })
            }).catch(error => {
                response.status(404).send({
                    status: 'sucesso',
                    message: 'error ao alterar o artista',
                    stack: error
                });
            });
    }
};

/* DELETE */
exports.remover_artista = (request, response) => {
    artista.findOneAndRemove(request.params.id)
        .then(data => {
            response.status(200).send({
                status: 'sucesso',
                message: 'sucesso ao remover o artista',
                records: data
            })
        }).catch(error => {
            response.status(404).send({
                status: 'sucesso',
                message: 'error ao remover o artista',
                stack: error
            });
        });
};


function creatPost(params, path) {
    let content;

    content = JSON.stringify({
        nome: params.nome,
        dataNascimento: params.dataNascimento,
        localNascimento: params.localNascimento,
        dataMorte: params.dataMorte,
        imgUrl: removeRootPath(path)
    });

    return content;
}

function creatPostWithoutFile(params) {
    let content;

    content = JSON.stringify({
        nome: params.nome,
        dataNascimento: params.dataNascimento,
        localNascimento: params.localNascimento,
        dataMorte: params.dataMorte
    });

    return content;
}


function removeRootPath(path) {
    let _path = path;
    _path = _path.replace('app/public/', '');
    return _path;
}