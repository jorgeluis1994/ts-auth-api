import { Customer } from "../domain/models/customer";
import { CreateCustomerPort } from "../domain/ports/in/createCustomerPort";
import { CustomerRepositoryPort } from "../domain/ports/out/customerRepositoryPort";

export class CustomerService implements CreateCustomerPort {

    //Inyecto en repositorio de customer en el constructor
    constructor(private customerRepositoryPort: CustomerRepositoryPort) {

    }

    //Implemento el contarto de domain entrada de data IN//
    public async executeRegister(customerData: Customer): Promise<Customer> {

        // Crear una nueva instancia de Customer usando customerData
        const customer = new Customer(
            customerData.id_customer,
            customerData.description,
            customerData.canal_domain_access,
            customerData.info_additional,
            customerData.creation_date,
            customerData.modification_date,
            customerData.id_user_create,
            customerData.id_user_modify,
            customerData.status,
            customerData.hash,
            customerData.connection_params,
            customerData.hash_connection,
            customerData.mnemonic
        );
        await this.customerRepositoryPort.save(customer);

        return customer;


    }




} 