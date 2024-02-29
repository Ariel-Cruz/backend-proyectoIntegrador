import Ruta from "../models/Ruta.js";

export const getRutas = async (req, res) => {
    try {
        const rutas = await Ruta.find().populate("curso");
        res.json(rutas);
    } catch (error) {
        return res.status(500).json({ message: error.message });
    }
};

export const createRuta = async (req, res) => {
    try {
        const { nombreRuta, curso } = req.body;

        const newRuta = new Ruta({
            nombreRuta,
            curso
        });
        await newRuta.save();
        return res.json(newRuta);

    }catch(error){
        return res.status(500).json({ message: error.message });

    }
}
export const updateRuta = async(req, res) =>{

    try{
        const updateRuta = await Ruta.findByIdAndUpdate(req.params.id, req.body, {new: true})
        console.log(updateRuta)
    }catch(error){
        console.log(error.message)
    }
}
export const deleteRuta = async(req, res)=>{
    try{
        const deleteRuta = await Ruta.findByIdAndDelete(req.params.id)
        if(!deleteRuta) return res.sendStatus(404)
        return res.sendStatus(204)

    }catch(error){
        console.log(error.message)
    }
}
export const getRuta = async(req, res)=>{
    try{
        const ruta = await Ruta.findById(req.params.id).populate("curso")
        if(!ruta) return res.sendStatus(404)
        return res.json(ruta)
    }catch(error){
        console.log(error.message)
    }
}
export const AsignarCurso = async(req, res) =>{
    const { id } = req.params;
    const { curso } = req.body;
    try{ 
        const updateRutaCurso = await Ruta.findByIdAndUpdate(id,{$push: { curso }},{new: true}).populate("curso")
        return res.json(updateRutaCurso)  
    }catch(error){
        console.log(error.message)
        return res.status(500).json({message: error.message})
    }
}


export const QuitarCurso = async (req, res) => {
    const { id } = req.params;
    const { curso } = req.body; 

    try {
        // Encuentra la ruta por su ID
        const ruta = await Ruta.findById(id);

        // Verifica si la ruta existe
        if (!ruta) {
            return res.status(404).json({ message: "La ruta no fue encontrada." });
        }

        // Encuentra el índice del curso dentro de la ruta por su ID
        const cursoIndex = ruta.curso.findIndex(cursoId => cursoId.toString() === curso.toString());

        // Verifica si el curso existe dentro de la ruta
        if (cursoIndex === -1) {
            return res.status(404).json({ message: "El curso no está asociado a esta ruta." });
        }

        // Quita el curso del arreglo de cursos de la ruta
        ruta.curso.splice(cursoIndex, 1);

        // Guarda la ruta actualizada en la base de datos
        const rutaActualizada = await ruta.save();

        return res.json(rutaActualizada);
    } catch (error) {
        console.log(error.message);
        return res.status(500).json({ message: "Ocurrió un error al intentar quitar el curso de la ruta." });
    }
};
