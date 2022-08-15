/*
Enunciado del ejercicio:
Crea un archivo JS que contenga las siguientes líneas
- Una variable que contenga la lista de la compra (mínimo 5 elementos)
- Modifica la lista de la compra y añádele "Aceite de Girasol"
- Vuelve a modificar la lista de la compra eliminando "Aceite de Girasol"
- Una lista de tus 3 películas favoritas (objetos con propiedades: titulo, director, fecha)
- Una nueva lista que contenga las películas posteriores al 1 de enero de 2010 (utilizando filter)
- Una nueva lista que contenga los directores de la lista de películas original (utilizando map)
- Una nueva lista que contenga los títulos de la lista de películas original (utilizando map)
- Una nueva lista que concatene la lista de directores y la lista de los títulos (utilizando concat)
- Una nueva lista que concatene la lista de directores y la lista de los títulos (utilizando el factor de propagación)
*/

let listaCompras = ["leche", "pan", "harina", "azucar", "yogurt"];
listaCompras.push("Aceite de Girasol");
listaCompras.pop();

console.log(listaCompras);

let peliculasFavoritas = [
    { 
      titulo: "Terminator", 
      director: "James Cameron", 
      fecha: new Date (1984, 10, 24)
    },

    { 
        titulo: "Last Samurai", 
        director: "Edward Zwick", 
        fecha: new Date (2004, 01, 22) 
    },
    
    {
        titulo: "Spider-Man: No Way Home",
        director: "Jon Watts",
        fecha: new Date(2021, 11, 16)
    }
];

//usando .filter()
const filmsPosteriores = peliculasFavoritas.filter((valor => valor.fecha > new Date (2010, 01, 0)))
console.log(filmsPosteriores);


//usando .map() filtra Director.
const directores = peliculasFavoritas.map(pelicula =>{
    return pelicula.director;
})
console.log(directores);


//usando .map() filtrar Titulos.
const titulos = peliculasFavoritas.map(peliculas => {
    return peliculas.titulo;
})
console.log(titulos);

//concatenando usando metodo concat
const nuevaLista = directores.contact(titulos);
console.log(nuevaLista);

//concatenando usando lista de propagacion
const nuevaListaDos = [...directores, ...titulos];
console.log(nuevaListaDos);


