import mongoose from "mongoose";


const cursoSchema = new mongoose.Schema({
    _id: mongoose.Schema.Types.ObjectId,
    nombreCurso: {type:String, required:true, trim:true},
    filtro: {type:String, required:true, trim:true},
    profesor: {type:String, required:true, trim:true},
    duracion:{type:Number, required:true, trim:true},
    imagen: {url:String, public_id:String},
    ruta: [{type:mongoose.Schema.Types.ObjectId, ref:"Rutas"}],
    modulos: [{type:mongoose.Schema.Types.ObjectId, ref:"Modulos"}],
    
})

export default mongoose.model("Curso", cursoSchema)