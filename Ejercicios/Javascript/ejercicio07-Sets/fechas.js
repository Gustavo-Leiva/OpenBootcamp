/*
Ejercicios de Fechas
Crea un archivo llamado fechas.js que contenga las siguientes líneas
- La fecha de hoy
- La fecha de tu nacimiento
- Un variable que indique si hoy es más tarde (>) que la fecha de tu nacimiento
- Una variable que contenga el día de tu nacimiento
- Una variable que contenga el mes de tu nacimiento (recuerda que Enero es mes 0)
- Una variable que contenga el año de tu nacimiento (con 4 dígitos)
*/


let fechaActual = new Date();
console.log(fechaActual);

let fechaNacimiento = new Date(1981, 11, 31);
console.log(fechaNacimiento);

let fechaMayor = fechaActual > fechaNacimiento;
console.log(fechaMayor);

let diaNacimiento = fechaNacimiento.getDate();
console.log(diaNacimiento);

let mesNacimiento = fechaNacimiento.getMonth() + 1;
console.log(mesNacimiento);

let anioNacimiento = fechaNacimiento.getFullYear();
console.log(anioNacimiento);