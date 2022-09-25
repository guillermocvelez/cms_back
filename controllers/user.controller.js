const { response } = require('express');
const bcryptjs = require('bcryptjs');

const Usuario = require('../models/usuario');

const usuariosGet =  (req, res = response ) => {
  res.json({
    msg: 'Ruta del Get'
  })
  console.log("geet");
};

const usuariosPost = async (req, res = response ) => {
  const { name, email, password, role } = req.body;
  const usuario = new Usuario({
    name,
    email,
    password,
    role
  });

  const salt = bcryptjs.genSaltSync();
  usuario.password = bcryptjs.hashSync( password, salt);
  await usuario.save()
  res.json({
    usuario
  })  
};


module.exports = {
  usuariosGet,
  usuariosPost
}