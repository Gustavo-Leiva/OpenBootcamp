//Que son las funciones, cómo se declaran, cómo se utilizan.

//declarar la funcion
// function saludar(parametro_1, parametro_2, parametro_3){
//     console.log("Hola");
// }

saludar("Gustavo");

//saludar en base el nombre
function saludar(nombre){
    console.log(`Hola ${nombre}`);
}

// aca pasamos las variables por valor
let nombre2 = "juan";
console.log(nombre2);

despedir(nombre2);

function despedir(nombre){
    nombre = "Diego";
    console.log(`adiós ${nombre}`);
}


//le pasamos un objetos (pasamos por referencia) 

let persona ={nombre: "Juan", apellido: "Gonzalez"};

saludarPersona(persona);
console.log(persona);

function saludarPersona(objeto){
    objeto.apellido = "Villar";//con esto cambio el valor del objeto original
    console.log(`Hola ${objeto.nombre} ${objeto.apellido}`);

}

saludar()

// imprimir una funcion con valores determinados
function imprimeNumero(numero = 7){ 
    console.log(numero);
}

imprimeNumero();




//usar el factor de propagacion con parametros de
function imprimir (...parametros){
    console.log(parametros)
}

imprimir(1,3,9,2,"hola", {id:9});


//crear una funcion de multiplicar
 function multiplicar(a=0, b= 0){
    return a * b;
 }

 console.log(multiplicar(4,3));



