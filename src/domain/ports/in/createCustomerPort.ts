import {Customer} from '../../models/customer'


export interface CreateCustomerPort{

   //entrada de customer desde usuario
   executeRegister(customerData:Customer): Promise<Customer>;



}