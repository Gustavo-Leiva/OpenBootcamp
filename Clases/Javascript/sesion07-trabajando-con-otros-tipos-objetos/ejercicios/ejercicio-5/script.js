/* 
1 - Solicita un nombre, la edad y muestra por consola el mensaje "Hola ____, tienes ____ años y el año que viene tendrás ____ años"
Realiza el ejercicio con prompt(mensaje) y haz uso de los template strings
*/

let name = prompt("introduce your name");
let age = parseInt(prompt("introduce your age"));
let mensaje= (`Hola ${name} tienes ${age} y el año que viene tendras ${age+1}`);
alert(mensaje);

