import express, { Request, Response } from 'express';

import {CustomerRepositoryPort} from '../../../domain/ports/out/customerRepositoryPort'
import { Customer } from '../../../domain/models/customer';
import { CustomerService } from '../../../application/customerService';
import { loggerAdapter } from '../../output/logging/loggerAdapter';




// Crear una instancia del servicio y del repositorio (simulado en este caso)
const customerRepositoryPort: CustomerRepositoryPort = {
    save: async (customer: Customer) => {
        // Simulación de guardar en la base de datos
        console.log(customer);
        loggerAdapter.info(`Customer register`);
        return customer;
    }
};
const customerService = new CustomerService(customerRepositoryPort);

// Crear el enrutador HTTP de Express
const customerRouter = express.Router();


/**
 * @swagger
 * /customers:
 *   get:
 *     summary: Obtiene todos los clientes
 *     description: Devuelve una lista de todos los clientes en la base de datos.
 *     responses:
 *       200:
 *         description: Lista de clientes
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 type: object
 *                 properties:
 *                   id:
 *                     type: integer
 *                   name:
 *                     type: string
 */

// Endpoint para registrar un nuevo cliente
customerRouter.post('/register', async (req: Request, res: Response) => {

    loggerAdapter.error('POST /customer - Method Not Allowed');
    
    const { id_customer, description, canal_domain_access, info_additional, creation_date, modification_date, id_user_create, id_user_modify, status, hash, connection_params, hash_connection, mnemonic } = req.body;

    // Crear el objeto Customer a partir de los datos recibidos
    const customer = new Customer(
        id_customer,
        description,
        canal_domain_access,
        info_additional,
        creation_date,
        modification_date,
        id_user_create,
        id_user_modify,
        status,
        hash,
        connection_params,
        hash_connection,
        mnemonic
    );

    try {
        // Llamar al servicio de la capa de aplicación para registrar al cliente
        const registeredCustomer = await customerService.executeRegister(customer);

        // Devolver la respuesta con el cliente registrado
        res.status(201).json(registeredCustomer);
    } catch (error) {

        loggerAdapter.error(`Error al registrar el cliente: ${error}`);
        // Manejo de errores
        res.status(500).json({ message: 'Error al registrar el cliente' });
    }
});

export { customerRouter };