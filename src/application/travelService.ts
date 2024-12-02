import { Travel } from "../domain/models/travel";
import { CreateTravel } from "../domain/ports/in/createTravel";
import { TravelRepository } from "../domain/ports/out/travelRepositoryPort";




export class TravelService implements CreateTravel {

    constructor(private travelRepository: TravelRepository) { }

    //Implementa el inicio de la peticion
    executeRegister(travel: Travel): Promise<any> {

        const registerTravel = this.travelRepository.saveTravel(travel);

        return registerTravel;
    }




}