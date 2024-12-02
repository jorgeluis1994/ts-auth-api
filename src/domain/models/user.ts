export class User {
    // id_user: number; // serial4
    // dni: string; // varchar(255)
    // name: string; // varchar(1000)
    // lastname: string; // varchar(1000)
    // login: string; // varchar(1000)
    // password_user: string; // varchar(1000)
    // mail: string; // varchar(1000)
    code_phone: object = {}; // jsonb (puede ser una estructura más específica)
    phone?: string; // varchar(255) (optional)
    id_google?: string; // varchar(255) (optional)
    id_hash_alastria?: string; // varchar(255) (optional)
    id_cat_roluser: object = {}; // jsonb
    user_structure: object = {};; // jsonb
    id_cat_accesstype: object = {}; // jsonb
    id_establishment?: number; // int8 (optional)
    id_cat_notification?: object; // jsonb (optional)
    key_zoom?: string; // varchar(255) (optional)
    reg_status?: string; // varchar (optional)
    code_otp?: number; // int4 (optional)
    id_specialist?: number; // int8 (optional)
    sign?: string; // text (optional)
    id_cat_specialty?: object; // jsonb (optional)
    tokens_push?: object; // jsonb (optional)
    password_sign?: string; // varchar(2000) (optional)
    // creation_date: number; // int8
    // modification_date?: number; // int8 (optional)
    // id_user_create: number; // int8
    // id_user_modify: number; // int8
    // status: string; // varchar(1)



   
}
