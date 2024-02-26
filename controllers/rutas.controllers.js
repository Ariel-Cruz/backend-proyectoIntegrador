import Ruta from "../models/Ruta.js";

export const getRutas = async (req, res) => {
    try {
        const rutas = await Ruta.find();
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
        const ruta = await Ruta.findById(req.params.id)
        if(!ruta) return res.sendStatus(404)
        return res.json(ruta)
    }catch(error){
        console.log(error.message)
    }
}
