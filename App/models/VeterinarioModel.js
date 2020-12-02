const { Schema, model } = require('mongoose');

const bcrypt = require('bcryptjs');


const VeterinarioSchema = new Schema({
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
    NombreUsuario: {
        type: String,
        unique: true,
        required: true
    },
    password: {
        type: String,
        required: true
    }
});

VeterinarioSchema.pre('save',function(next){
    bcrypt.genSalt(10).then(salts => {
        bcrypt.hash(this.password,salts).then(hash => {
            this.password = hash;
            next();
        }).catch(error => next(error));
    }).catch(error => next(error));
});

const Veterinario = model('Veterinario',VeterinarioSchema);

module.exports = Veterinario;
