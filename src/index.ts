import express from 'express';
import bodyParser from 'body-parser';
import cors from 'cors';
import dotenv from 'dotenv';
import { customerRouter } from './infrastructure/input/http/customerController';

// Cargar las variables de entorno desde el archivo .env
dotenv.config();

const app = express();

// Middleware
app.use(cors()); // Habilitar CORS
app.use(bodyParser.json()); // Para parsear el cuerpo de la solicitud a formato JSON

// Ruta de ejemplo
app.get('/', (req, res) => {
  res.send('¡Hola, mundo!');
});


app.use('/customers', customerRouter);

// Iniciar el servidor
const port = process.env.PORT || 4100;
app.listen(port, () => {
  console.log(`Servidor escuchando en el puerto ${port}`);
});
