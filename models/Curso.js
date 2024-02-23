import mongoose from "mongoose";

const cursoSchema = new mongoose.Schema({
    nombreCurso: {type:String, required:true, trim:true},
    categoria: {type:String, required:true, trim:true},
    profesor: {type:String, required:true, trim:true},
    duracion:{type:Number, required:true, trim:true},
    imagen: {url:String, public_id:String},

})
export default mongoose.model("Curso", cursoSchema)