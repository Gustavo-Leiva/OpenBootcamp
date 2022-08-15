//trabajando con objetos
const obj = {
    id: 4,
    nombre:"juan",
    apellido :"Gonzalez",
    isDeveloper: true,
    libros_favoritos: ["El metodo", "código de la manifestación"],
    "4-juegos": [1, 2, 3, 4]
}

//acceder a un objeto
console.log(obj.id);
console.log(obj["4-juegos"]);


//acceder a un objeto a traves de variables sobre propiedades declaradas anteriormente.
const prop = "isDeveloper";
console.log(obj[prop]);

//replicar un objeto
const obj2 = obj;//no solo se copia el objeto sino tambien la referencia en memoria. con lo cual en la misma de la
//referencia en memoria quedará almacenada los datos de obj y obj2 como un unico objeto


console.log(obj2);
obj2.nombre = "Iñigo";
console.log(obj2.nombre);

//comprobacion que el objeto1 no mantiene el mismo valor.
console.log(obj.nombre);

//copiar y duplicar un objeto dentro de otros (utilizando los operadores de spred (...))
const obj3 = {...obj}

console.log(obj.nombre);
console.log(obj3.nombre);

//cambio el dato nombre en el objeto 3
obj3.nombre = "Gorka";


console.log(obj.nombre);
console.log(obj3.nombre); 

//cómo ordenar listas de objetos en funcion de una propiedad.

const listaPeliculas = [
    {titulo: "lo que el viento se llevo", anio :1939},
    {titulo: "titanic", anio :1997},
    {titulo: "moana", anio :2016},
    {titulo: "el efecto mariposa", anio :2004},
    {titulo: "ted", anio :2012}

]
    
console.log(listaPeliculas);

// .sort() ordenar por fecha de la mas antigua
//sort muta el valor original 
listaPeliculas.sort((a, b) => a.anio - b.anio);
console.log(listaPeliculas)