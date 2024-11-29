import express from 'express';
import bodyParser from 'body-parser';
import cors from 'cors';
import dotenv from 'dotenv';

import {connectDb} from './config/dbConfig';

import { customerRouter } from './infrastructure/input/http/customerController';

// Cargar las variables de entorno desde el archivo .env
dotenv.config();

const app = express();

// Middleware
app.use(cors()); // Habilitar CORS
app.use(bodyParser.json()); // Para parsear el cuerpo de la solicitud a formato JSON

app.use('/customers', customerRouter);

// Iniciar la conexión a la base de datos
connectDb().then(() => {
  // Iniciar el servidor solo después de que la base de datos esté conectada
  const port = process.env.PORT || 4100;
  app.listen(port, () => {
    console.log(`Servidor escuchando en el puerto ${port}`);
  });
}).catch((error) => {
  console.error('Error al conectar a la base de datos:', error);
  process.exit(1); // Salir si la conexión falla
});