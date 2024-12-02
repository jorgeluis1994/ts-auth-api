import { User } from "../../models/user";

export interface UserRepositoryPort{
    //Guardar Customer
    save(user:User): Promise<User>;
}