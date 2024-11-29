import { Customer } from "../../models/customer";

export interface CustomerRepositoryPort{
    //Guardar Customer
    save(customer:Customer): Promise<Customer>;
}