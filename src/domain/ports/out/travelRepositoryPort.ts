import { Travel } from "../../models/travel";

export interface TravelRepository {
    /**
   * Guarda un objeto Travel y devuelve el objeto guardado.
   * @param travel - El objeto Travel que se desea guardar.
   * @returns Una promesa que se resuelve con el objeto Travel guardado.
   */
    // Guarda un objeto Travel y devuelve el objeto guardado.
    saveTravel(travel: Travel): Promise<any>;

    updateTravel(travel: Travel): Promise<any>;

    // Busca un viaje por la descripción y devuelve un array de objetos Travel que coinciden.
    getByDescTrave(description: string): Promise<Travel[]>;

    // Busca un viaje por su ID y devuelve el objeto Travel encontrado.
    getByIdTrave(id: string): Promise<Travel | null>;

    // Elimina un viaje por su ID y devuelve el ID del viaje eliminado.
    deleteTravel(id: any): Promise<any>;
}
