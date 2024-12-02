import {Travel} from '../../models/travel'


//Interface de entrada
export interface CreateTravel{

     executeRegister(travel:Travel): Promise<Travel>
}