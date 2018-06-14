'use strict'
const multer = require('multer');
const uuid = require('node-uuid');

/* STORAGE */

/* CV */
const storage_cv = multer.diskStorage({
    destination: (request, file, callback) => {
        callback(null, './app/public/doc');
    },
    filename: (request, file, callback) => {
        let ext = file.originalname.substr(file.originalname.lastIndexOf('.') + 1);
        let filename = uuid.v4() + '.' + ext;
        callback(null, filename);
    }
});

const storage_cv_copy = multer.diskStorage({
    destination: (request, file, callback) => {
        callback(null, './app/public/doc/doc_copy');
    },
    filename: (request, file, callback) => {
        let ext = file.originalname.substr(file.originalname.lastIndexOf('.') + 1);
        let filename = uuid.v4() + '.' + ext;
        callback(null, filename);
    }
});

/* FOTO USUARIO */
const storage_foto_usuario = multer.diskStorage({
    destination: (request, file, callback) => {
        callback(null, './app/public/img/usuario');
    },
    filename: (request, file, callback) => {
        let ext = file.originalname.substr(file.originalname.lastIndexOf('.') + 1);
        let filename = uuid.v4() + '.' + ext;
        callback(null, filename);
    }
});

const storage_foto_candidato = multer.diskStorage({
    destination: (request, file, callback) => {
        callback(null, './app/public/img/candidato');
    },
    filename: (request, file, callback) => {
        let ext = file.originalname.substr(file.originalname.lastIndexOf('.') + 1);
        let filename = uuid.v4() + '.' + ext;
        callback(null, filename);
    }
});


/* FOTO VAGA */
const storage_foto_vaga = multer.diskStorage({
    destination: (request, file, callback) => {
        callback(null, './app/public/img/vaga');
    },
    filename: (request, file, callback) => {
        let ext = file.originalname.substr(file.originalname.lastIndexOf('.') + 1);
        let filename = uuid.v4() + '.' + ext;
        callback(null, filename);
    }
});

const storage_foto_empresa = multer.diskStorage({
    destination: (request, file, callback) => {
        callback(null, './app/public/img/empresa');
    },
    filename: (request, file, callback) => {
        let ext = file.originalname.substr(file.originalname.lastIndexOf('.') + 1);
        let filename = uuid.v4() + '.' + ext;
        callback(null, filename);
    }
});


const storage_foto_dica = multer.diskStorage({
    destination: (request, file, callback) => {
        callback(null, './app/public/img/dica');
    },
    filename: (request, file, callback) => {
        let ext = file.originalname.substr(file.originalname.lastIndexOf('.') + 1);
        let filename = uuid.v4() + '.' + ext;
        callback(null, filename);
    }
});


const storage_foto_curso = multer.diskStorage({
    destination: (request, file, callback) => {
        callback(null, './app/public/img/curso');
    },
    filename: (request, file, callback) => {
        let ext = file.originalname.substr(file.originalname.lastIndexOf('.') + 1);
        let filename = uuid.v4() + '.' + ext;
        callback(null, filename);
    }
});

const storage_foto_instrutor = multer.diskStorage({
    destination: (request, file, callback) => {
        callback(null, './app/public/img/instrutor');
    },
    filename: (request, file, callback) => {
        let ext = file.originalname.substr(file.originalname.lastIndexOf('.') + 1);
        let filename = uuid.v4() + '.' + ext;
        callback(null, filename);
    }
});

/* FILTER */

const fileFilter_cv = (request, file, callback) => {
    if (
        file.mimetype === 'application/pdf' ||
        file.mimetype === 'application/vnd.openxmlformats-officedocument.wordprocessingml.document' ||
        file.mimetype === 'application/msword') {
        callback(null, true);
    } else {
        callback(null, false);
    }
};

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


exports.upload_cv = multer({
    storage: storage_cv,
    fileFilter: fileFilter_cv
});

exports.upload_cv_copy = multer({
    storage: storage_cv_copy,
    fileFilter: fileFilter_cv
});

exports.upload_foto_usuario = multer({
    storage: storage_foto_usuario,
    fileFilter: fileFilter_img
});

exports.upload_foto_candidato = multer({
    storage: storage_foto_candidato,
    fileFilter: fileFilter_img
});

exports.upload_foto_vaga = multer({
    storage: storage_foto_vaga,
    fileFilter: fileFilter_img
});

exports.upload_foto_empresa = multer({
    storage: storage_foto_empresa,
    fileFilter: fileFilter_img
});

exports.upload_foto_dica = multer({
    storage: storage_foto_dica,
    fileFilter: fileFilter_img
});

exports.upload_foto_curso = multer({
    storage: storage_foto_curso,
    fileFilter: fileFilter_img
});

exports.upload_foto_instrutor = multer({
    storage: storage_foto_instrutor,
    fileFilter: fileFilter_img
});