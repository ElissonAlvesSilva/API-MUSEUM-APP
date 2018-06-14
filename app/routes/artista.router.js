'use strict'
const upload = require('../util/storage.util');
module.exports = app =>{

    const controller = require('../controllers/artista.controller');

    app.route('/v1/artistas')
        .get(controller.listar)
        .post(upload.upload_foto_artista.single('foto'), controller.criar_artista);

    app.route('/v1/artistas/:id')
        .put(upload.upload_foto_artista.single('foto'), controller.alterar_artista)
        .delete(controller.remover_artista);

}