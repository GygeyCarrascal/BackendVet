const Veterinario = require('../models/VeterinarioModel');
const { response,res } = require('express');
const bcrypt = require('bcryptjs');
const { generateJWT } = require('../helpers/token');

const index = async(req, res = response) => {
    const empleados = await Veterinario.find();
    
    res.json({
        ok: true,
        empl:empleados
    });
}



module.exports = {
    index
}