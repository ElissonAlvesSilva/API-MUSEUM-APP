'use strict'
const multer = require('multer');
const uuid = require('node-uuid');

/* STORAGE */


const storage_foto_item = multer.diskStorage({
    destination: (request, file, callback) => {
        callback(null, './app/public/img/item');
    },
    filename: (request, file, callback) => {
        let ext = file.originalname.substr(file.originalname.lastIndexOf('.') + 1);
        let filename = uuid.v4() + '.' + ext;
        callback(null, filename);
    }
});
const storage_foto_artista = multer.diskStorage({
    destination: (request, file, callback) => {
        callback(null, './app/public/img/artista');
    },
    filename: (request, file, callback) => {
        let ext = file.originalname.substr(file.originalname.lastIndexOf('.') + 1);
        let filename = uuid.v4() + '.' + ext;
        callback(null, filename);
    }
});

const fileFilter_img = (request, file, callback) => {
    if (
        file.mimetype === 'image/jpeg' ||
        file.mimetype === 'image/png' ||
        file.mimetype === 'image/x-ms-bmp') {
        callback(null, true);
    } else {
        callback(null, false);
    }
}

exports.upload_foto_item = multer({
    storage: storage_foto_item,
    fileFilter: fileFilter_img
});

exports.upload_foto_artista = multer({
    storage: storage_foto_artista,
    fileFilter: fileFilter_img
});