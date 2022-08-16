/*
Ejercicios de Objetos

Enunciado del ejercicio:
Crea un archivo llamado objetos.js que contenga las siguientes líneas
- Un objeto con tus datos personales (nombre, apellido, edad, altura, eresDesarrollador)
- Una variable que obtenga tu edad a partir del objeto anterior
- Una lista que contenga el objeto con tus datos personales y un nuevo objeto con los datos personales de tus dos mejores amig@s
- Una nueva lista con los objetos de la lista anterior ordenados por edad, de mayor a menor
*/

//Solucion
//- Un objeto con tus datos personales (nombre, apellido, edad, altura, eresDesarrollador)
let datos = {
    nombre: "Gustavo",
    apellido: "Leiva",
    edad: 40,
    altura: 1.73,
    isDeveloper: true
}

//- Una variable que obtenga tu edad a partir del objeto anterior
let obtenerEdad = datos.edad;
console.log(obtenerEdad);


//- Una lista que contenga el objeto con tus datos personales y un nuevo objeto con los datos personales de tus dos mejores amig@s
let datosPersonales = [
    {nombre: "Gustavo", apellido: "Leiva", edad: 40, altura: 1.73, isDeveloper: true},
    //esta es otra posible solución mas resumida sin necesidad de copiar todos los datos de nuevo {...datos},
   
]

let mejoresAmigos = [
    {nombre: "Mariano", apellido: "Monsalve", edad: 41, altura: 1.80, isDeveloper: false},
    {nombre: "Ariel", apellido: "Dominguez", edad: 40, altura: 1.78, isDeveloper: true}
]

let mejoresAmigosOrdenados = mejoresAmigos.sort((edadA, edadB)=> edadA.edad - edadB.edad)
console.log(mejoresAmigosOrdenados);
