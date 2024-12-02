import express, { Request, Response } from 'express';
import { User } from '../../../domain/models/user';

import {UserService} from '../../../application/userService'

import {UserRepositoryPort} from '../../../domain/ports/out/userRepository.Port'
import { loggerAdapter } from '../../output/logging/loggerAdapter';

// Crear el enrutador HTTP de Express
const userRouter = express.Router();


// Crear una instancia de UserRepository
const userRepositoryInstance:UserRepositoryPort ={
    save: async (user: User) => {
        // Simulación de guardar en la base de datos
        console.log(user);

        return user;
    }
}

// Crear una instancia de UserService y pasar la instancia de UserRepository
const userService = new UserService(userRepositoryInstance);

userRouter.post('/register', async (req: Request, res: Response) => {

    loggerAdapter.error('POST /customer - Method Not Allowed');
    
    const { id_customer, description, canal_domain_access, info_additional, creation_date, modification_date, id_user_create, id_user_modify, status, hash, connection_params, hash_connection, mnemonic } = req.body;

    // Crear el objeto Customer a partir de los datos recibidos
    const customer = new User();

    try {
        // Llamar al servicio de la capa de aplicación para registrar al cliente
        const registeredCustomer = await userService.executeRegister(customer);

        // Devolver la respuesta con el cliente registrado
        res.status(201).json(registeredCustomer);
    } catch (error) {

        loggerAdapter.error(`Error al registrar el cliente: ${error}`);
        // Manejo de errores
        res.status(500).json({ message: 'Error al registrar el cliente' });
    }
});



export { userRouter };