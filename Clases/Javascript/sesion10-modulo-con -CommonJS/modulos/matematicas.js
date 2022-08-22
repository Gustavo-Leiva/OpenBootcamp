function sumar(a, b){
    return a + b;
}

function multiplicar (a, b){ 
    return a * b;
}

function elevar(a , b){ 
    return a ** b;
}

function factorial(a){
    //factorial de 5 = 5*4*3*2*1

    let factorial = 1;
    for (let i = 2; i <= a; i++){ 
        factorial *= i;
    }
    return factorial;
}


//De esta manera se hace pública la funcion es decir se exporta luego debemos importarla en 
//el archivo que queremos consumir dichas funciones.
module.exports = {
    sumar,
    multiplicar,
    elevar,
    factorial
}