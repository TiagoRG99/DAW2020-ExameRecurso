var mongoose = require('mongoose');

var listaSchema = new mongoose.Schema({
    _id: String,
    designacao:String,
    data:String,
    produtos:[{
        designacao:String,
        categoria:String,
        produtos:{_type:String,
            valor:String,
            unidade:String},
    }
    ]
    
});

module.exports = mongoose.model('lista', listaSchema);