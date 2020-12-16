
    

constmongoose = require('mongoose');
 
letSchema = mongoose.Schema;
 
letusuarioSchema = newSchema({​​​​​​​​
nombre: {​​​​​​​​
type:String,
required: [true, 'Tu nombre es necesario.']
    }​​​​​​​​,

primerApellido: {​​​​​​​​
type:String,
required: [true, 'Tu primer apellido necesario.']
    }​​​​​​​​,

segundoApellido: {​​​​​​​​
type:String,
required: [true, 'Tu segundo apellido es  Paterno necesario.']
    }​​​​​​​​,

edad:{​​​​​​​​
type:Number, 
required: [true, 'Tu edad es necesaria']
    }​​​​​​​​,
    
curp:{​​​​​​​​
type:String,
required: [true, 'Tu curp es necesaria']
    }​​​​​​​​,
telefono:{​​​​​​​​
type:Number,
required: [true, 'Tu numero de telefono es necesario']
    }​​​​​​​​,
mail:{​​​​​​​​
type:String,
unique: [true, 'Tu email es necesario']
    }​​​​​​​​,
activo:{​​​​​​​​
type:Boolean,
default:true
    }​​​​​​​​
}​​​​​​​​);
 
module.exports = mongoose.model('Usuario', usuarioSchema);

