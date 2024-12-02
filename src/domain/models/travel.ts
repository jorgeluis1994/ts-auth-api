export class Travel {
    id_travel:number
    fecha:number
    origen:string
    destino:string
    precioBase:number

    constructor(id_travel:number,fecha:number,origen:string,destino:string,precioBase:number){
        this.id_travel=id_travel,
        this.fecha=fecha,
        this.origen=origen,
        this.destino=destino,
        this.precioBase=precioBase
    }

    
}