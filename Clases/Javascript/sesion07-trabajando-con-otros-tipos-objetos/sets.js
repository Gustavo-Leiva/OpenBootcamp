//sets o conjuntos (en castellano)
//arrays es un conjunto ordenado de valores u objetos.
const array = [1, 2, 3, 4, 5, 6, 1, 2, 5, "hola", { id:5 }, { id:5} ];


//es un conjunto no ordenado de valores unicos u elementos unicos aseguran que los valores no son repetidos
//en un objeto dentro de un set aunque tenga el mismo contenido van a ser diferentes porque tienen distintos indices.
const miSet = new Set(array);

console.log(array);
console.log(miSet); 


//metodos en set para añadir o eliminar valores.

//.add() -metodo para agregar-
miSet.add(9);
console.log(miSet);



miSet.add(4);
console.log(miSet);

//.delete() -metodo para eliminar-
miSet.delete("Hola");
console.log(miSet);

//.clear() -metodo para borrar todo el set- 
// miSet.clear();
// console.log(miSet);


//.has() -metodo para saber si contiene un dato-
console.log(array.includes(2));
console.log(miSet.has(40));


//.size - con esta propiedad puedo saber el tamaño.
console.log(miSet.size);


//forEach() con esto podemos hacer una iteracion del set.

miSet.forEach(valor =>{
    console.log(valor);
})


//convertir el set en un array con la propiedad, values.
const it_miSet = miSet.values();
console.log(it_miSet);


//de esta manera convierto el set en un arrays usando efecto de propagacion.
const ar_miSet = [...miSet];
console.log(ar_miSet);

