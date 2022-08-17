

/*
Enunciado del ejercicio:
Crea un archivo JS que contenga las siguientes líneas
- Una función sin parámetros que devuelva siempre "true"
- Una función asíncrona que utilice un setTimeout y pase por consola un "Hola soy una promesa" 
 5 segundos después de haberse ejecutado
- Una función generadora de índices pares automáticos
*/



//- Una función sin parámetros que devuelva siempre "true"
function devuelveTrue (){
    console.log(true);
}
devuelveTrue();

//otra posible solucion
function devuelveTrue() {
    return true
}

// - Una función asíncrona que utilice un setTimeout y pase por consola un "Hola soy una promesa" 
//  5 segundos después de haberse ejecutado

async function promesa (){
    return setTimeout(()=>console.log("Hola soy una promesa" ), 5000);
}


// - Una función generadora de índices pares automáticos



function* generadorId(){
    let id = 0;
    while(true){
        yield id +=2;
    }
}

const gen = generadorId();

console.log(gen.next().value)
console.log(gen.next().value)
console.log(gen.next().value)
console.log(gen.next().value)
console.log(gen.next().value)
console.log(gen.next().value)
console.log(gen.next().value)
console.log(gen.next().value)
console.log(gen.next().value)
console.log(gen.next().value)
