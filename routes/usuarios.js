const express = require('express');
const _ = require('underscore');
const usuario = require('../models/usuario');
const Usuario = require('../models/usuario');
const app = express();
 
    app.get('/usuario', function (req, res) {
    // Ordenar:
    let desde = req.query.desde || 0;
    let hasta = req.query.hasta || 5;
 
    Usuario.find({ estado:true })
        .skip(Number(desde))
        .limit(Number(hasta))
        .exec((err, usuarios) => {
    if (err) {
        return res.status(400).json({
        ok:false,
        msg:'Ocurrio un error de consultar.',
        err
            });
            }
    // Respuesta exitosa:
    res.json({
    ok:true,
    msg:'Lista de usuarios bien.',
    conteo:usuarios.length,
    usuarios
            });
        });
    });
 
    app.post('/usuario', function(req, res){
        let body = req.body;
        let usr = new Usuario({
        nombre: body.nombre,
        primerApellido: body.primerApellido,
        segundoApellido: body.segundoApellido,
        edad:body.edad,
        curp:body.curp,
        telefono: body.telefono,
        mail: body.mail,
    });
        
    usr.save((err, usrDB) => {
    // Si hubo algún error:
    if (err){
    return res.status(400).json({
        ok:false,
        msg:'Ocurrio un error.',
        err
        });
    }
    res.json({
    ok:true,
    msg:'Usuario insertado bien.',
    usrDB
            });
        });
 
        });
 
        app.put('/usuario/:id', function(req, res) {
          let id = req.params.id;
          let body = _.pick(req.body, ['nombre','primerApellido', 'mail', 'segundoApellido', 'edad', 'curp', 'telefono']);
      
          Usuario.findByIdAndUpdate(id, body, { new: true, runValidators: true, context: 'query' },
              (err, usrDB) => {
                  if (err) {
                      return res.status(400).json({
                          ok: false,
                          msg: 'Ocurrio un error al momento de actualizar',
                          err
                      });
                  }
      
                  res.json({
                      ok: true,
                      msg: 'Usuario actualizado bien',
                      usuario: usrDB
                  });
              });
      });

      app.delete('/usuario/:id', function(req, res){
        let id = req.params.id;
    
        Usuario.findByIdAndUpdate(id, {estado: false }, {new: true, runValidators: true, context: 'query'},
        (err, usrDB) =>{
          if (err){
                  return res.status(400).json({
                    ok: false,
                    msg: 'Ocurrió un error al momento de eliminar.',
                    err
                  });
                }
                res.json({
                  ok: true,
                  msg: 'Usuario eliminado exitosamente.',
                  usrDB 
                });
        });
      });
 
    module.exports = app;