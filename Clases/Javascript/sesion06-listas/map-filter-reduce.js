//Trabajar con métodos avanzados 
//.map() .filter()  .reduce() 

const array =["Buenos Aires", "Bariloche", "Córdoba", "Salta", "Mendoza"];

//recorrer con .forEach()
array.forEach(ciudades =>{
    console.log(ciudades);
})


//metodo .map()
const newArray = array.map((valor, indice) => `${indice +1} - ${valor} `);
console.log(newArray);


//metodo .filter()
const listaObjetos = [
    { nombre: "Gustavo", edad: 38}, 
    { nombre: "Leire", edad: 35 },
    { nombre: "Gorka", edad: 34 },
    { nombre: "Miguel", edad: 28 },
    { nombre: "Lucía", edad: 3 },
    { nombre: "Amaia", edad: 29}    
    
]

// const personasMayores = listaObjetos.filter(valor => {
//     if(valor.edad >30)
//     {
//         return true
//     }
//     else
//     { 
//         return false
//     }
// })


const personasMayores = listaObjetos.filter(valor => valor.edad>30);
console.log(personasMayores);


const nuevaLista = listaObjetos.filter(valor => valor.nombre !== "Miguel");
console.log(nuevaLista);




//reduce es para obtener algo a partir de una lista.
//acepta 4 parametros, (valor anterior, current, inicial y array original)
const valores = [3,56, 23, 5, 90, 100];

const suma = valores.reduce((acumulado, curr, i, arrayOriginal) => {
    console.log(acumulado);
    console.log(curr);
    console.log(i);
    console.log(arrayOriginal);

    return acumulado +  curr
})

console.log(suma);




