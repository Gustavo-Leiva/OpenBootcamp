// Formas de importar/exportar módulos
// 1. CommonJS - require
// 2. Import ES6 - import


// 1. CommonJS - require (trabajamos con la primera version usanda antes de ES-6)
//aca importo el archivo desde donde esta funcion alojada.
const moduloMatematicas = require ("./modulos/matematicas.js");

//Otra forma de importar es la siguientes
//const {factorial, suma} = require ("./modulos/matematicas.js")



//Alternativa A-
// const factorial = moduloMatematicas.factorial;
// const sumar = moduloMatematicas.sumar;

//Alternativa B- otra forma de resumir la linea 10-11 seria
const {factorial, sumar} = moduloMatematicas;

const fact = factorial(5);
console.log(fact);

const suma = moduloMatematicas.sumar(12,90);
console.log(suma);



