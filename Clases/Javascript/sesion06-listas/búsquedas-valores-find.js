//Iterar los valores de una lista de
const array = ["hola", 2, 5, 90, false, undefined];


//forma antigua (poco eficiente)
for(let i=0; i<array.length; i++){
    console.log(array[i]);
}


//forma ES6 (más eficiente) .forEach()
let suma =0;
const arrayNums =[3,6,2,77,2,3,93,19];

arrayNums.forEach(valor=>{
    suma += valor;
    console.log(valor);
})
console.log(suma);

//busqueda de un valor dentro de una lista . find()
//Quiero encontrar el elemento en una lista ejemplo 90
const variable = array.find(valor => {
    if(valor === 90){
        return true;
    }
})

console.log(variable);

//buscar en una lista de objetos.
const listaObjetos = [
    { nombre: "Gustavo", Edad: 40}, 
    { nombre: "Leire", edad: 35 },
    { nombre: "Gorka", edad: 34 },
    { nombre: "Miguel", edad: 28 },
    { nombre: "Lucía", edad: 3 },
    { nombre: "Amaia", edad: 29}    
    
]

// const objeto = listaObjetos.find(o =>{
//     if(o.nombre ==="Miguel"){
//         return true
//     }
// })
// console.log(objeto.edad);


//primera forma quitando true
const objeto = listaObjetos.find(o => o.nombre === "Miguel")
console.log(objeto.edad);

//otra forma usando la propiedad edad.
const {edad} = listaObjetos.find(o => o.nombre ==="Miguel")
console.log(edad);