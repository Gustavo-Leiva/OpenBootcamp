//Listas, Arrays o arreglo (tambien se suele llamar vectores)


const lista = [1, "hola", true, undefined, null];
const lista2 = new Array(2, "hola", true, undefined, null);
const lista3 = new Array(3);
lista3[0]="soy el primer elemento, index 0";
const lista4 = [lista, lista2, lista3];

console.log(lista);
console.log(lista2);
console.log(lista3);
console.log(lista4);






//Objetos
const movil ={
    altura : 10,
    anchura : 5,
    marca : "xioami",
    isWhite:false,
    contactos:["Diego", "Gustavo", "Maxi"],
    tarjeta:{
        marca:"Scandisk",
        almacenamiento: 32
    },
    "altura-tarjeta":4 //El nombre de un atributo si se usa un guion medio se lo denomina entre comillas

}

movil.anyo=2019;
movil.marca="Samsung";

console.log(movil.contactos);
console.log(movil.tarjeta);
console.log(movil.marca);
console.log(movil.anyo);
console.log(movil.marca);


//Fechas
//librerias de apoyo Moment.js

const ahora = new Date();
console.log(ahora);

const fecha_milis = new Date(10); //ultilizando los milis segundo.
console.log(fecha_milis);

const fecha_cadena = new Date("Agost 05 2020");
console.log("fecha_cadena");

const fecha_valores =new Date(2022, 0, 15);
console.log(fecha_valores);

const dia = ahora.getDate();
const mes = ahora.getMonth() + 1;
const anio= ahora.getfullYear();

console.log(dia, mes, anio); 
