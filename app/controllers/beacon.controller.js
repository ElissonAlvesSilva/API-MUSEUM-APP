'use strict'

const mongoose = require('mongoose');
const beacons = mongoose.model('beacon');

/* GET */
exports.listar = (request, response) => {
    beacons.find({}, '_id uniqueId name description items')
        .populate({
            path: 'items',
            select: '_id nome dataCriacao descricao dataAquisicao imgUrl artista',
            populate: {
                path: 'artista',
                model: 'artista'
            }
        })
        .then(data => {
            response.status(200).send({
                status: 'sucesso',
                message: 'sucesso ao retornar lista de beacons',
                records: {
                    beacons: data
                }
            });
        })
        .catch(error => {
            response.status(404).send({
                status: 'sucesso',
                message: 'error ao retornar lista de animais',
                stack: error
            });
        });
};

exports.lista_por_id = (request, response) => {
    beacons.findOne({
            uniqueId: request.params.uniqueId
        }, '_id uniqueId name description items')
        .populate({
            path: 'items',
            select: '_id nome dataCriacao descricao dataAquisicao imgUrl artista',
            populate: {
                path: 'artista',
                model: 'artista'
            }
        })
        .then(data => {
            response.status(200).send({
                status: 'sucesso',
                message: 'sucesso ao retornar o beacon',
                records: data
            });
        })
        .catch(error => {
            response.status(404).send({
                status: 'sucesso',
                message: 'error ao retornar o beacon',
                stack: error
            });
        });
};

exports.list_beacons_animal_items = (request, response) => {
    let ids = request.body.ids;
    beacons.find({
            uniqueId: {
                $in: ids
            }
        },  '_id uniqueId name description items')
        .populate({
            path: 'items',
            select: '_id nome dataCriacao descricao dataAquisicao imgUrl artista',
            populate: {
                path: 'artista',
                model: 'artista'
            }
        })
        .then(data => {
            response.status(200).send({
                status: 'sucesso',
                message: 'sucesso ao retornar o beacon',
                records: data
            });
        })
        .catch(error => {
            response.status(404).send({
                status: 'sucesso',
                message: 'error ao retornar o beacon',
                stack: error
            });
        });
};

/* POST */

exports.criar_beacons = (request, response) => {
    beacons.create(request.body)
        .then(data => {
            response.status(201).send({
                status: 'sucesso',
                message: 'sucesso ao cadastrar o beacons',
                records: data
            })
        }).catch(error => {
            response.status(404).send({
                status: 'sucesso',
                message: 'error ao cadastrar o beacons',
                stack: error
            });
        });
};

/* PUT */

exports.alterar_beacons = (request, response) => {
    beacons.findByIdAndUpdate(request.params.id, request.body)
        .then(data => {
            response.status(201).send({
                status: 'sucesso',
                message: 'sucesso ao alterar o beacons',
                records: request.body
            })
        }).catch(error => {
            response.status(404).send({
                status: 'sucesso',
                message: 'error ao alterar o beacons',
                stack: error
            });
        });
};

/* DELETE */
exports.remover_beacons = (request, response) => {
    beacons.findOneAndRemove(request.params.id)
        .then(data => {
            response.status(200).send({
                status: 'sucesso',
                message: 'sucesso ao remover o beacons',
                records: data
            })
        }).catch(error => {
            response.status(404).send({
                status: 'sucesso',
                message: 'error ao remover o beacons',
                stack: error
            });
        });
};

function removeRootPath(path) {
    let _path = path;
    _path = _path.replace('app/public/', '');
    return _path;
}