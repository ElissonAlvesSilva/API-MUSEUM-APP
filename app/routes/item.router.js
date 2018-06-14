'use strict'
const upload = require('../util/storage.util');

module.exports = app =>{

    const controller = require('../controllers/item.controller');

    app.route('/v1/items')
        .get(controller.listar)
        .post(upload.upload_foto_item.single('foto'), controller.criar_item);

    app.route('/v1/items/:id')
        .put(upload.upload_foto_item.single('foto'), controller.alterar_item)
        .delete(controller.remover_item);

}