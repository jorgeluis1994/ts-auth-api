import { User } from "../domain/models/user";
import { CreateUserPort } from "../domain/ports/in/createUserPort";
import { UserRepositoryPort } from "../domain/ports/out/userRepository.Port";


export class UserService implements CreateUserPort{

    constructor(private userRepositoryPort:UserRepositoryPort){

    }

    executeRegister(userData: User): Promise<User> {

        const user=new User();
        const data =this.userRepositoryPort.save(user);
        throw new Error("Method not implemented.");
    }
    documentRegister(): Promise<User> {
        throw new Error("Method not implemented.");
    }

}