import winston from 'winston';

// Configuración del logger usando Winston
const logger = winston.createLogger({
  level: 'info',  // Mínimo nivel de logs que se registrarán
  format: winston.format.combine(
    winston.format.colorize(),   // Colorear la salida en la consola
    winston.format.simple()      // Formato simple para los logs
  ),
  transports: [
    new winston.transports.Console(),  // Log a la consola
    new winston.transports.File({ filename: 'logs/app.log' })  // Log a archivo
  ]
});

export default logger;
