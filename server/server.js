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

  //aqui empieza el get YA LO TENGOO
  app.get('/usuario', function (req, res){
    res.json({
        ok: 200, 
        mensaje:'Usuario consultado'
    })
})
 
   //aqui se pone el delete
   app.delete ('/usuario/:id', function (req, res){ 
let id = req.params.id

res.json({
    ok: 200,
    mensaje: 'Usuario eliminado bien',
    id: id
})
})

//este es el post YA LO TENGO
app.post('/usuario', function (req, res){
    let nombre = req.body.nombre;
    let body = req.body;
    res.json({
        ok: 200, 
        mensaje:'Usuario insertado bien',
       body:body 
    })
})
     //aqui se pone el put YA LO TENGO
     app.put('/usuario', function (req, res){
      
        let body = req.body;
        res.json({  
            ok: 200,
            mensaje: 'Usuario actualizado con exito',
            body:body 
            

        })          
    })


  app.listen(3000, () => {
      console.log('El servidor esta en la linea por el puerto 3000')
  });