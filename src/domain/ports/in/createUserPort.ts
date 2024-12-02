import { User } from "../../models/user";


export interface CreateUserPort{
     //entrada de customer desde usuario
   executeRegister(userData:User): Promise<User>;
   //document
   documentRegister():Promise<User>;

}