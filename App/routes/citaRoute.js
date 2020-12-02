/* ruta oficinas*/

const { Router } = require('express');
const citcontro = require('../controllers/CitaController');



    
const { validarCampos } = require('../middleware/validarCampos');
const { validarJWT } = require('../middleware/validarToken');
const { check } = require('express-validator');


const router = Router();/*

router.get('/', validarJWT, getOficinas);



    router.post('/', [
        check('direccion', 'El direccion es obligatorio').not().isEmpty(),
    check('localidad', 'El localidad es obligatorio').not().isEmpty(),
    check('provincia', 'El provincia es obligatorio').not().isEmpty(),
        validarCampos,
        validarJWT
    ],
    crearOficina);

router.put('/', validarJWT,actualizarOficina);

router.delete('/', validarJWT, eliminarOficina);*/

router.get('/',citcontro.index) // api.com/product/ Index: Listar todos los productos
      .post('/',citcontro.create) ;  // api.com/product/ Create: Crear un nuevo producto
  /*    .get('/:key/:value',find,show)    // api.com/product/category/Hogar Show: Muestra un producto en específico
      .put('/:key/:value',find,update)    // api.com/product/name/SamsungGalaxy Update: Actualizar un producto en especifico
      .delete('/:key/:value',find,remove);// api.com/product/name/SamsungGalaxy*/



module.exports = router; 