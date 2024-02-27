import mongoose from "mongoose";

const rutasSchema = new mongoose.Schema({
    nombreRuta: {type:String, required:true, trim:true},
    curso: [{type:mongoose.Schema.Types.ObjectId, ref:"Curso"}],    
})

export default mongoose.model("Rutas", rutasSchema)
