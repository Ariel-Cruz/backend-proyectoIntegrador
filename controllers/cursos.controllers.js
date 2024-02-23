import Curso from "../models/Curso.js";
import { deleteImage } from "../libs/cloudinary.js";
import fs from "fs-extra"
import {uploadImageCursos} from "../libs/cloudinary.js"

export const getCursos = async (req, res) => {
    try {
        const cursos = await Curso.find();
        res.json(cursos);
    } catch (error) {
        return res.status(500).json({ message: error.message });
    }
}
export const createCurso = async(req, res) => {
    try{
        const { nombreCurso, categoria, profesor, duracion } = req.body;
        let imagen;

        if(req.files?.imagen){
            const result = await uploadImageCursos(req.files.imagen.tempFilePath)

            await fs.remove(req.files.imagen.tempFilePath)

            console.log(result)
            imagen = {
                url: result.secure_url,
                public_id: result.public_id,
            }
            
        }

        const newCurso = new Curso({
            nombreCurso,
            categoria,
            profesor,
            duracion,
            imagen
        });
        await newCurso.save();
        return res.json(newCurso);

    }catch(error){
        return res.status(500).json({ message: error.message });
    }
}
export const updateCurso = async(req, res) => {

    try{
        const updateCurso = await Post.findByIdAndUpdate(req.params.id, req.body, {new: true})
        console.log(updateCurso)
        return  res.send("actualizando curso")
    }catch(error){
        console.log(error.message)
        return res.status(500).json({message: error.message})
    }
}

export const deleteCurso = async(req, res) => {
    try{
        const cursoRemoved = await Curso.findByIdAndDelete(req.params.id)
        if (!cursoRemoved) return res.sendStatus(404)

        if(cursoRemoved.imagen.public_id){
            await deleteImage(cursoRemoved.imagen.public_id)
        }        await deleteImage(cursoRemoved.imagen.public_id)

        return res.sendStatus(204)
    }catch(error){
        console.log(error.message)
        return res.status(500).json({message: error.message})
    }
}
export const getCurso = async(req, res) => {
    try{
        const curso = await Curso.findById(req.params.id)
        if(!curso) return res.sendStatus(404)
        return res.json(curso)
    }catch(error){
        console.log(error.message)
        return res.status(500).json({message: error.message})
    }

}