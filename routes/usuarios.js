
    
constexpress = require('express');
const_ = require('underscore');
constusuario = require('../models/usuario');
constUsuario = require('../models/usuario');
constapp = express();
app.get('/usuario', function (req, res) {​​​​​
// Ordenar:
letdesde = req.query.desde || 0;
lethasta = req.query.hasta || 5;

Usuario.find({​​​​​ estado:true }​​​​​)
     .skip(Number(desde))
     .limit(Number(hasta))
     .exec((err, usuarios) => {​​​​​
if (err) {​​​​​
returnres.status(400).json({​​​​​
ok:false,
msg:'Ocurrió un error de consultar.',
err
          }​​​​​);
        }​​​​​
// Respuesta exitosa:
res.json({​​​​​
ok:true,
msg:'Lista de usuarios obtenida con éxito.',
conteo:usuarios.length,
usuarios
        }​​​​​);
     }​​​​​);
    }​​​​​);

app.post('/usuario', function(req,res){​​​​​
letbody = req.body;
letusr = newUsuario({​​​​​
nombre:body.nombre,
primerApellido:body.primerapellido,
segundoApellido:body.segundoApellido,
edad:body.edad,
curp:body.curp,
telefono:body.telefono,
mail:body.email,
      }​​​​​);
    
usr.save((err, usrDB) => {​​​​​
// Si hubo algún error:
if (err){​​​​​
returnres.status(400).json({​​​​​
ok:false,
msg:'Ocurrió un error.',
err
          }​​​​​);
        }​​​​​
res.json({​​​​​
ok:true,
msg:'Usuario insertado muy bien.',
usrDB
        }​​​​​);
      }​​​​​);

    }​​​​​);

module.exports = app;
