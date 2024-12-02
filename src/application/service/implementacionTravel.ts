import { Travel } from "../../domain/models/travel";
import { TravelRepository } from "../../domain/ports/out/travelRepositoryPort";

import { connectDb } from '../../config/dbConfig'
import mongoose from 'mongoose';
import { loggerAdapter } from "../../infrastructure/output/logging/loggerAdapter";


export class implementaRepositorioTravel implements TravelRepository {
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
    deleteTravel(id: number): Promise<number> {
        throw new Error("Method not implemented.");
    }

}