import mongoose from "mongoose";


const rutasSchema = new mongoose.Schema({
    nombreRuta: {type:String, required:true, trim:true},
    curso: [{type:mongoose.Schema.Types.ObjectId, ref:"Cursos"}]    
})
export default mongoose.model("Rutas", rutasSchema)
