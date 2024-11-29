import logger from '../../../infrastructure/output/logging/logger';

// Interfaz para el adaptador de logging
export interface Logger {
  info(message: string): void;
  warn(message: string): void;
  error(message: string): void;
  debug(message: string): void;
}

// Adaptador de logging que implementa la interfaz Logger
class LoggerAdapter implements Logger {
  info(message: string): void {
    logger.info(message);
  }

  warn(message: string): void {
    logger.warn(message);
  }

  error(message: string): void {
    logger.error(message);
  }

  debug(message: string): void {
    logger.debug(message);
  }
}

export const loggerAdapter = new LoggerAdapter();
