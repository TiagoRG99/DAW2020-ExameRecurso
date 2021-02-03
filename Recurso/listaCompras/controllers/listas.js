var Lista = require('../models/listas')

module.exports.listar = ()=>{
    return Lista
        .find()
        .exec()
}

module.exports.consultar = (id)=>{
    return Lista
        .find({_id:id})
        .exec()
}