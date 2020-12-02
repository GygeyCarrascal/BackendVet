const mongoose = require('mongoose');

const MascotaSchema = new mongoose.Schema({
    id_masc: {
        type: String,
         unique: true,
        required: true,
    },
    nombremasc: {
        type: String,
        required: true,
    },
    dni_duen: {
        type: Number,
        required: true,
    },
    raza: {
        type: String,
        required: true,
    }, 
    añodenac: {
        type: Number,
        required: true,
    },
    alergias: {
        type: String,
        required: true,
    }
});

const Mascota = mongoose.model('Mascota',MascotaSchema);

module.exports = Mascota;
