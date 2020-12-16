// require ('./config/config.js');
const express = require ('express');    
const bodyParser = require('body-parser')
const app = express();

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }))
 
// parse application/json
app.use(bodyParser.json())
 


app.get('/', function (req, res) {
    res.send('Hola mundo');
  });

  //aqui empieza el get
  app.get   ('/usuario', function (req, res){
    res.json({
        ok: 200, 
        mensaje:'Usuario consultado'
    })
})
  app.get('/saludo', function (req, res) {
    res.json({
ok: '200',
mensaje: 'bienvenida mitzi'
    })
  });
//este es el post
   app.post('/usuario', function (req, res){
       let nombre = req.body.nombre;
       let body = req.body;
       res.json({
           ok: 200, 
           mensaje:'Usuario insertado bien',
          body:body 
       })
  })
   //aqui se pone el delete



   //aqui se pone el put
   app.put('/usuario/:id/:nombre ', function (req, res){
    let id = req.params.id
    let nombre = req.params.nombre;
    res.json({
        ok: 200,
        mensaje: 'Usuario actualizado con exito',
        id: id,
        nombre: nombre
    })
})


  app.listen(3000, () => {
      console.log('El servidor esta en la linea por el puerto 3000')
  });