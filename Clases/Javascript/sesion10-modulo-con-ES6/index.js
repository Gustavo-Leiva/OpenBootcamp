//Sintaxis para importar desde otro modulo. indicando solo las propiedades que estan en entre llaves{}
// import {sumar, elevar, nombre} from './modulo-ES6/matematicas.js'

// const sum = sumar(4,12);
// console.log(sum);

// const potencia = elevar(2,21);
// console.log(potencia);

// console.log(nombre);

//para importar todas las propiedades del modulo matematicas.
import * as moduloMatematicas from './modulo-ES6/matematicas.js';
import getAutor, {libro} from './modulo-ES6/literatura.js'

const sum = moduloMatematicas.sumar(4,12);
console.log(sum);

const potencia = moduloMatematicas.elevar(2,21);
console.log(potencia);

console.log(moduloMatematicas.nombre);
console.log(getAutor());
console.log(libro);

