//Cómo podemos comparar listas
//.every()
const array =[4, 6, 7, 8, 3, 6, 2, 1, -4, -7, 12, 5, -40];
// const resultado = array.every(valor=> {
//     if(typeof valor === "number"){
//         return true;
//     }else{
//         return false;
//     }
// })

const resultado = array.every(valor => valor > 0 ); //con cero indico si son positivo

console.log(resultado);


///comparacion de listas
const array1 = [1, 2, 3, 4];
const array2 = [1, 2, 3, 4];

console.log (array1 === array2);

//Otro metodo de comparar array.
const compararArrays = (arrays1, array2)=>{
    if(array1.length !== array2.length) return false;
    const res =array1.every((valor, i) => valor === array2[i]);
    return res
}

console.log(compararArrays(array1, array2));
const array3 = [1, 2, 3, 5,];

console.log(compararArrays(array1, array3));