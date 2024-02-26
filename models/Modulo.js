import mongoose from "mongoose";



const modulosSchema = new mongoose.Schema({
    nombreModulo: {type:String, required:true, trim:true},
    descripcion: {type:String, required:true, trim:true},
    curso: [  {type:mongoose.Schema.Types.ObjectId, ref:"Cursos"}]
})

export default mongoose.model("Modulos", modulosSchema)