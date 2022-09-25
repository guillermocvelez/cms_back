const { Router } = require('express');
const { check } = require('express-validator');

const { 
  usuariosGet,
  usuariosPost,
  // usuariosPut,
  // usuariosDelete
} = require('../controllers/user.controller');

const router = Router();


router.get('/', usuariosGet );
router.post('/', usuariosPost );
// router.put('/:id', usuariosPut);
// router.delete('/:id', usuariosDelete)

module.exports = router;