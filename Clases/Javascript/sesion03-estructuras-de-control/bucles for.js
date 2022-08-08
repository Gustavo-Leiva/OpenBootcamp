//Bucles For

// for (initializacion; condicion; actualizacion){
      //esto es el bucle
// }

// i= i + 1
// i += 1
// i++

for( let i= 0; i<10; i = i + 3){

    //Esto es el bucle
    console.log(i)
}

let lista = [1, 4, 6, 2, 3, 7, 10, 12, 500];

for(let i = 0; i < lista.length; i++){

    console.log(lista[i]);
}

//Estructura for ... of
for (let valor of lista){
    console.log(valor);
}


//Estructura forEach
lista.forEach(valor=>{
    console.log(valor);
});


//Estructura for ...in

let persona ={
    nombre:"Gustavo",
    apellido: "Leiva",
    edad:40,
    isDeveloper: true
}

console.log(persona.nombre);

let prop="edad";
console.log(persona[prop]);

for (let propiedad in persona){
    console.log(propiedad);
    console.log(persona[propiedad]);
}
