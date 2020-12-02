const { response } = require('express');
const Citas = require('../models/CitaModel');

const index = async(req, res = response) => {
    const empleados = await Citas.find();
    
    res.json({
        ok: true,
        empl:empleados
    });
};


const create = async(req, res = response) => {
   try {
       const cit=new Citas(req.body);
       Citas.estado=1;
       cit.save();      
    res.json({
        ok: true,
        empl:cit
    });
    console.log('exitoso')
   } catch (error) {
       res.status(400).json({
           message:"Error al procesar la peticion"
       })
   }
  
};

module.exports = {
   index,
   create
}