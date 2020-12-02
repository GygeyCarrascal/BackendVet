const mongoose = require('mongoose');
const { Schema } = require('mongoose');

const CitaSchema = new mongoose.Schema({
    //PK
    id_Cita: {
        type: String,
        unique: true
    },
    fecha: {
        type: Date/*,
        required: true*/
    },
    hora:{
        type: String/*,
        required: true*/
    },
    estado: {
        type: Number,
        default:1
    },
    dni_Vet: {
        type: Number,
        required: true,
    },
    dni_Duenio: {
        type: Number,
        required: true,
    },
    id_Mascota: {
        type: Number,
        required: true,
    },
    Diagdesc: {
        type: String
    },
    Tratamdesc: {
        type: String
    },
});

const Citas = mongoose.model('Cita',CitaSchema);


CitaSchema.pre('save',function(next){
   /* bcrypt.genSalt(10).then(salts => {
        bcrypt.hash(this.password,salts).then(hash => {
            this.password = hash;
            next();
        }).catch(error => next(error));
    }).catch(error => next(error));*/
    this.id_Cita=Citas.length+1;
});

module.exports = Citas;
