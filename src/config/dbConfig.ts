import mongoose from 'mongoose';

export const connectDb = async (): Promise<void> => {
    try {
        // Sin las opciones 'useNewUrlParser' ni 'useUnifiedTopology'
        await mongoose.connect('mongodb://localhost:27017/smc');
        console.log('Conectado a MongoDB');
    } catch (error) {
        console.error('Error al conectar a MongoDB:', error);
        process.exit(1); // Salir si la conexión falla
    }
};
