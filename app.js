import express from "express"
import fileUpload from "express-fileupload"
import cursosRoutes from "./routes/cursos.routes.js"
import cors from "cors"


const app = express()
//middleware
app.use(express.json())
app.use(fileUpload({
    useTempFiles: true,
    tempFileDir: "./upload"
}))

//routes
app.use(cursosRoutes)
app.use(cors());
export default app