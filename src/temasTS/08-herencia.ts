class Persona3{
    protected nombre:string; 
    protected edad:number; 
    constructor(nombre:string, edad:number){
        this.nombre=nombre; 
        this.edad=edad; 
    }
    imprimir(){
        console.log(`Nombre: ${this.nombre}`); 
        console.log(`Edad: ${this.edad}`); 
    }
}

class Empleado extends Persona3{
    private sueldo:number; 
    constructor(nombre:string, edad:number, sueldo:number){
        super(nombre,edad); 
        this.sueldo=sueldo
    }
    imprimir(){
        console.log(`Sueldo: ${this.sueldo}`); 
    }
    pagarImpuestos(){
        if(this.sueldo>5000)
        console.log(`${this.nombre} DEBE PAGAR IMPUESTOS`); 
    else 
    console.log(`${this.nombre} No paga impuestos:)`); 
    }
}
const persona3=new Persona3('Juan', 44); 
persona3.imprimir(); 

const empleado1=new Empleado('Ana', 22, 7000); 
empleado1.imprimir(); 
empleado1.pagarImpuestos(); 