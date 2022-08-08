// Métodos de cadenas de texto (parte 2)
let input = "ESCORpio"
let db = "escorpio"

// toLowerCase() - toUpperCase()
console.log(input.toLocaleLowerCase());
console.log(input.toUpperCase());
console.log(input.toLowerCase() === db.toLowerCase());
console.log(input.toUpperCase() === db.toUpperCase());


// Formas de concatenar dos cadenas de caracteres
let str_1 = "Hola soy la primera cadena."
let str_2 = " Y yo soy la segunda cadena."

// 1) opcion con el uso de concat
console.log(str_1.concat(str_2));
console.log(str_1.concat(" ", str_2));

// 2) opcion con el uso del signo +
console.log(str_1 + " " + str_2);

// 3) opcion con el uso de temples
console.log(`${str_1} ${str_2}`);

// Eliminar espacios al inicio y al final uso de trim
let str_3 = "    Hola soy un string con espacios al final.   "
console.log(str_3.length);

// trim()
//elimina todos los espacios.
console.log(str_3.trim().length);

//trimStart()elimina los espacios del inicio
console.log(str_3.trimStart().length);

//trimEnd()elimina los espacios del final
console.log(str_3.trimEnd().length);

// Obtener el caracter que hay en cierta posición
let str_4 = "Hola soy el string número 4" // ["H", "o", "l", "a", " ", "s"........]

console.log(str_4.charAt(5));
console.log(str_4[5]);

// Obtener la posición de una palabra dentro de una cadena de caracteres
let str_5 = "Hola soy Gustavo y me gusta el surf. Mi nombre es Gustavo y mi apellido es Leiva";
console.log(str_5.indexOf("Gustavo")); //devuelve la primera instancia,  si encuentra devuelve true 1 sino lo encuentra false 0
console.log(str_5.charAt(9));
console.log(str_5.lastIndexOf("Gustavo")); //devuelve la ultima instancia