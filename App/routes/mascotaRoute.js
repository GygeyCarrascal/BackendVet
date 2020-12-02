/* ruta Vehiculo*/

const { Router } = require('express');
const MascController = require('../controllers/MascotaController');

const { validarJWT } = require('../middleware/validarToken');


const router = Router();/*

router.get('/', validarJWT, getVehiculos);


router.post('/',validarJWT,crearVehiculo);

router.put('/:codOficina', validarJWT,actualizarVehiculo);

router.delete('/:codOficina', validarJWT, eliminarVehiculo);*/


router.post('/', MascController.create)
     .get('/:dni', MascController.buscarDueñoporDNI);

module.exports = router; 