import { Travel } from "../../domain/models/travel";
import { TravelRepository } from "../../domain/ports/out/travelRepositoryPort";

import { connectDb } from '../../config/dbConfig'
import mongoose, { Schema } from 'mongoose';
import { loggerAdapter } from "../../infrastructure/output/logging/loggerAdapter";


export class implementaRepositorioTravel implements TravelRepository {
    updateTravel(travel: Travel): Promise<any> {
        throw new Error("Method not implemented.");
    }
    async updateIdTravel( id:string, travel: Travel): Promise<any> {
        try {
            // Conectar a la base de datos
            await connectDb();
    
            // Acceder directamente a la base de datos a través de mongoose.connection.db
            const db = mongoose.connection.db;
    
            // Acceder a la colección 'travel'
            const collection = db!.collection('travel');
    
            // Realizar la actualización de un documento de viaje
            const updatedTravel = await collection.findOneAndUpdate(
                { 
                   _id: new mongoose.Types.ObjectId(id)
                }, // Criterio de búsqueda por id_travel
                {
                    $set: { // Usamos $set para especificar los campos a actualizar
                        id_travel:travel.id_travel,
                        fecha: travel.fecha,
                        origen: travel.origen,
                        destino: travel.destino,
                        precioBase: travel.precioBase,
                    },
                },
                { 
                    returnDocument: 'after', // Esto garantiza que se devuelve el documento actualizado
                    upsert: false, // No crear un nuevo documento si no se encuentra el original
                }
            );
    
      
            // Loguear la actualización
            loggerAdapter.info(`Viaje actualizado: ${travel.id_travel}`);
    
            // Devolver el viaje actualizado
            return updatedTravel;
    
        } catch (error) {
            // Manejo de errores
            loggerAdapter.error(`Error al actualizar el viaje: `);
            throw new Error('Error al actualizar el viaje');
        }
    }
    async saveTravel(travel: Travel): Promise<Object> {
        try {
            await connectDb();
            
            // Realiza la operación de inserción
            const db = mongoose.connection.db; // Accede a la base de datos directamente
            const collection = db!.collection('travel');

            // Inserta el nuevo cliente
            const result = await collection.insertOne(travel);

            loggerAdapter.info(`travel register`);

            return result;

        } catch (error) {
            throw new Error("Method not implemented.");
        }




    }
    getByDescTrave(description: string): Promise<Travel[]> {
        throw new Error("Method not implemented.");
    }
    getByIdTrave(id: string): Promise<Travel | null> {
        throw new Error("Method not implemented.");
    }
    async deleteTravel(id: string): Promise<any> {
        try {
            await connectDb();
            
            // Realiza la operación de inserción
            const db = mongoose.connection.db; // Accede a la base de datos directamente
            const collection = db!.collection('travel');

            // Inserta el nuevo cliente
            const result = await collection.deleteOne({ _id: new mongoose.Types.ObjectId(id) });

            loggerAdapter.info(`travel register`);

            return result;

        } catch (error) {
            throw new Error("Method not implemented.");
        }

    }

}