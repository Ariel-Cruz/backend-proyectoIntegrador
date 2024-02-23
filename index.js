import app from "./app.js";
import { PORT } from "./config.js";
import dbConection from "./database/conexion.js";

app.listen(PORT, () => {
    console.log(`Aplicacion corriendo en --->>>> http://localhost:${PORT}`);
});
dbConection();