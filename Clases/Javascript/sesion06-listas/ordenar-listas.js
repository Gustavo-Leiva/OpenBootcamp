//ordenar un array con .sort()
const array = [2, 5, 9, 15, 1, 2, 0, 4];

console.log (array);

// -1 invierte el array y 1 lo deja como esta.
array.sort((a,b)=>{
    if(a < b){
        return -1;
    } else if(a > b){
        return 1;
    }else{
        return 0; //a === b
    }
}) 
console.log(array);


//Ordenar array unicamente númerico
const arrayNumerico = [2, 5, 9, 15, 1, 2, 0, 4];
arrayNumerico.sort((a,b)=> a - b);
console.log(arrayNumerico);


//Interesante en array de objetos
const listaObjetos = [
    { nombre: "Gustavo", edad: 38}, 
    { nombre: "Leire", edad: 35 },
    { nombre: "Gorka", edad: 34 },
    { nombre: "Miguel", edad: 28 },
    { nombre: "Lucía", edad: 3 },
    { nombre: "Amaia", edad: 29}    
    
]

//una manera
// listaObjetos.sort((a, b)=>{
//     if(a.edad < b.edad){
//         return - 1;
//     }
//     else if(a.edad > b.edad){
//         return + 1;
//     }
//     else{
//         return 0;
//     }
// })

//segunda manera
listaObjetos.sort((a, b) => a.edad - b.edad)

console.log(listaObjetos);