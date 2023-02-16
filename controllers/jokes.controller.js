const Joker = require("../models/jokes.model");

const listaBromas = async (req, res)=>{
    const bromas = await Joker.find();
    res.json({bromas})
};

const buscarBromas = async (req, res)=>{
    const BromaEncontrada = await Joker.findOne({_id: req.params.id})
    res.json( { resultado: 'ok' , broma: BromaEncontrada  , parametro: req.params.id} )
}

const crearBromas = async (req, res)=>{
    try{
        const bromaCreada = await Joker.create(req.body);
        res.json( { resultado: 'ok' , broma_nuevo: bromaCreada} );
    } catch(error){
        res.json(error);
    }
    }

const actualizarBromas = async (req, res)=>{
    const bromaActualizada = await Joker.findOneAndUpdate({_id: req.params.id}, req.body ,{new: true})
    res.json( { resultado: 'ok' , broma: bromaActualizada  , parametro: req.params.id} )
    
    }
const eliminarBroma= async (req, res)=>{
    const bromaEliminado = await Joker.deleteOne({_id: req.params.id})
    res.json( { resultado: 'ok' , broma: bromaEliminado , parametro: req.params.id} )
    }
    
module.exports={
    listaBromas,
    buscarBromas,
    crearBromas,
    actualizarBromas,
    eliminarBroma
}