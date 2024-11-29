export class Customer {

    id_customer: number;              // serial4 -> number (entero)
    description: string;              // varchar(255) -> string
    canal_domain_access: object | null; // jsonb -> object (puede ser null)
    info_additional: object | null;    // jsonb -> object (puede ser null)
    creation_date: number;            // int8 -> number (entero)
    modification_date: number;        // int8 -> number (entero)
    id_user_create: number;           // int8 -> number (entero)
    id_user_modify: number | null;    // int8 -> number (entero, puede ser null)
    status: string;                   // varchar(1) -> string
    hash: string | null;              // varchar(255) -> string (puede ser null)
    connection_params: object | null; // jsonb -> object (puede ser null)
    hash_connection: object | null;   // jsonb -> object (puede ser null)
    mnemonic: string | null;          // varchar -> string (puede ser null)

    // Constructor de la clase
    constructor(
        id_customer: number,
        description: string,
        canal_domain_access: object | null,
        info_additional: object | null,
        creation_date: number,
        modification_date: number,
        id_user_create: number,
        id_user_modify: number | null,
        status: string,
        hash: string | null,
        connection_params: object | null,
        hash_connection: object | null,
        mnemonic: string | null
    ) {
        this.id_customer = id_customer;
        this.description = description;
        this.canal_domain_access = canal_domain_access;
        this.info_additional = info_additional;
        this.creation_date = creation_date;
        this.modification_date = modification_date;
        this.id_user_create = id_user_create;
        this.id_user_modify = id_user_modify;
        this.status = status;
        this.hash = hash;
        this.connection_params = connection_params;
        this.hash_connection = hash_connection;
        this.mnemonic = mnemonic;
    }

}