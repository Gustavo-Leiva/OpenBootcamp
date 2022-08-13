//Cómo trabajar con listas (arrays, listas, vectores......)

let var1= { id:false};
let array = [1, "hola", false, {id:5}, null, undefined, var1];

console.log(array);


//Acceder a los valores de un array a través de su posición
//array [indice] => 0, 1, 2, 3, 4, 5, ........
console.log(array[0]);
console.log(array[1]);
console.log(array[2]);
console.log(array[3]);


//Métodos para introducir nuevos valores en nuestros arrays.
//.push() .unshift() => Mutan el valor de nuestro array.

//Valores al final-> push
array.push("final", 1, 45, 100);
console.log(array);

//Valores al principio del array("inicio", 87, 99)
array.unshift("inicio", 87, 100);
console.log(array);


//Metodo para eliminar valores en nuestros arrays.
// .pop() .shift() => mutan el valor del array

let array2 = [1, 3, true, false];
//valores al final -> Pop
array2.pop();
console.log(array2);

//valores al principio -> shift
array2.shift();
console.log(array2);

//Método para eliminar, modificar o añadir valores en nuestro array2
const array3 =[1, 2, 3, 4, 5, 6];


//Eliminar valores .splice(indice, numValoresAEliminar)
array3.splice(2,3);
console.log(array3);

//Añadir valores .splice(indice, 0 , valores)
array3.splice(2, 0, "hola");
console.log(array3);

//Modificar valores .splice(indice, 1, valores);
array3.splice(2, 1, 3);
console.log(array3);

