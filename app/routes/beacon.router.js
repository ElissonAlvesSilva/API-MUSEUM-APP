'use strict'

module.exports = app =>{

    const controller = require('../controllers/beacons.controller');

    app.route('/v1/beacons')
        .get(controller.listar)
        .post(controller.criar_beacons);

    app.route('/v1/beacons/:id')
        .put(controller.alterar_beacons)
        .delete(controller.remover_beacons);

    app.route('/v1/beacons/:uniqueId')
        .get(controller.lista_por_id);

    app.route('/v2/beacons')
        .post(controller.list_beacons_animal_items);

}