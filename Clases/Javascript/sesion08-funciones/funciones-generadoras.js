//Funciones Generadoras

//generar un id de manera incremental
function* generaId(){
    let id = 0;
    while(true){
        id++;
        if(id === 10){
            return id; 
        }
        yield id; //esperando hasta que se vuelva a llamar.
    }
}

const gen = generaId();

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

