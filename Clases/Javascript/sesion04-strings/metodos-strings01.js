//Métodos más utilizados con cadenas de caracteres.

//Cómo obtener la longitud de un string.

let str ="Hola soy un string";
console.log(str.length);


//Obtener partes de cadenas de caracteres.
//slice() substring() substr()este esta empezando a ser obsoletor

// Extrae los caracteres desde inicio hasta fin (el final no se incluye)
let slice_str = str.slice(5,10);
console.log(slice_str);

// Igual que substring pero admite valores negativos, si ponemos valores negativos empezará desde atrás
let substring_str = str.substring(5,10);
console.log(substring_str);

let substr_str= str.substr(5,10);
console.log(substr_str);

// Reemplazar parte del contenido de una cadena de texto
let cadena = "Hola mi nombre es Gustavo";
console.log(cadena);


// Al utilizar strings sólo reemplaza la primera instancia
console.log(cadena.replace("Gustavo", "Daniel"));

let texto_largo = "Tito no es un mono cualquiera. A Tito no le gusta trepar por los árboles y odia comer plátanos. Él prefiere pasear por el bosque, oler las flores y recoger las nueces que se caen de los árboles."

// Al utilizar strings sólo reemplaza la primera instancia lo primero que encuentre
console.log(texto_largo.replace("los", "cinco"));


// Al utilizar la expresión regular /g (global), reemplaza todas las instancias
console.log(texto_largo.replace(/los/g, "cinco"));
