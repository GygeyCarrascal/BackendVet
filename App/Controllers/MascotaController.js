const Mascota = require('../models/MascotaModel');
const { response,res } = require('express');
const bcrypt = require('bcryptjs');
const { generateJWT } = require('../helpers/token');

const create = async(req, res = response) => {
  try {
      const cit=new Mascota(req.body); 
      cit.save();      
    res.json({
       ok: true,
       mascotanueva:cit
   });
  } catch (error) {
      res.status(400).json({
          message:"Error al procesar la peticion"
      })
  }
 
};

const buscarDueñoporDNI  = async(req, res = response) =>{
    try {
        const cit=await Mascota.find ({"dni_duen":req.params.dni})  
        if(cit!=null){
            res.json({
                ok: true,
                mascota:cit
            });
        } else{
            res.json({
                mesage:"No existe"
            })
        }      
        
    } catch (error) {
        console.log(error)
        res.status(400).json({
            message:"Error al procesar la peticion"            
        })
    }
};


module.exports = {
    create,
    buscarDueñoporDNI
}