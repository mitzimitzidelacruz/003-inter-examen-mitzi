const mongoose = require('mongoose');
 
let Schema = mongoose.Schema;
 
let usuarioSchema = new Schema({
    nombre: {
        type: String,
        required: [true, 'Tu nombre es necesario.']
    },
    primerApellido: {
        type: String,
        required: [true, 'Tu primer apellido es necesario.']
    },
    segundoApellido: {
        type: String,
        required: [true, 'Tu segundo apellido Paterno es necesario.']
    },
    edad:{
        type: Number,
        required: [true, 'Tu edad es necesaria.']
    },
    curp:{
        type: String,
        required: [true, 'Requiere la curp.']
    },
    telefono:{
        type: Number,
        required: [true, 'Tu numero telefonico es necesario']
    },
    email:{
        type: String,
        unique: true
    },
    activo:{
        type: Boolean,
        default:true
    }
});
module.exports = mongoose.model('Usuario', usuarioSchema);