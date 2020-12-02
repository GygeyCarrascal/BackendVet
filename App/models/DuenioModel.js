const { Schema, model } = require('mongoose');

const DuenoSchema = Schema({
    nombre: {
        type: String,
        required: true,
    },
    apellido: {
        type: String,
        required: true,
    },
    dni: {
        type: Number,
        unique: true,
        required: true
    },
     tele: {
        type: Number,
        required: true,
    }, 
    tele2: {
        type: Number,
    }

}, { collection: 'Dueno' }); 
/*
DuenoSchema.method('toJSON', function() {
    const { __v, ...object } = this.toObject();
    return object;
})*/

module.exports = model('Dueno', DuenoSchema);