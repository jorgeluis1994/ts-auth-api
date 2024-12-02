import express from 'express';
import bodyParser from 'body-parser';
import cors from 'cors';
import dotenv from 'dotenv';
import swaggerJSDoc from 'swagger-jsdoc';
import swaggerUi from 'swagger-ui-express';

import {connectDb} from './config/dbConfig';

import { customerRouter } from './infrastructure/input/http/customerController';
import { userRouter } from './infrastructure/input/http/userController';
import { travelRouter } from './infrastructure/input/http/travelController';

// Cargar las variables de entorno desde el archivo .env
dotenv.config();

// Configuración de Swagger
const swaggerOptions = {
  definition: {
    openapi: '3.0.0',
    info: {
      title: 'API Users',
      version: '1.0.0',
      description: 'Gestion de usuario con mongo',
    },
    servers: [
      {
        url: `http://localhost:${process.env.PORT || 4100}`,
      },
    ],
  },
  apis: ['./src/infrastructure/input/http/*.ts'], // Ruta de los archivos de tus controladores
};

const swaggerSpec = swaggerJSDoc(swaggerOptions);

const app = express();

// Middleware
app.use(cors()); // Habilitar CORS
app.use(bodyParser.json()); // Para parsear el cuerpo de la solicitud a formato JSON
// Ruta de Swagger UI
app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerSpec));

app.use('/customers', customerRouter);
app.use('/user', customerRouter);
app.use('/api', travelRouter);

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