
const { response,res } = require('express');
const bcrypt = require('bcryptjs');
const { generateJWT } = require('../helpers/token');
const DuenioModel = require('../models/DuenioModel');


const create = async(req, res = response) => {
    try {
        const cit=new DuenioModel(req.body); 
        cit.save();      
        res.json({
            ok: true,
            dueñonuevo:cit
        });
    } catch (error) {
        res.status(400).json({
            message:"Error al procesar la peticion"
        })
    }
   
 };

const buscarporDNI  = async(req, res = response) =>{
    try {
        const cit=await DuenioModel.find ({"dni":req.params.dni})  
        if(cit!=null){
            res.json({
                ok: true,
                dueño:cit
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
    buscarporDNI
}