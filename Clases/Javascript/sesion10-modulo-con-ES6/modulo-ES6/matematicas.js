//le agrego export adelante de todo en la funcion
export function sumar(a, b){
    return a + b;
}

export function multiplicar (a, b){ 
    return a * b;
}

export function elevar(a , b){ 
    return a ** b;
}

export function factorial(a){
    //factorial de 5 = 5*4*3*2*1

    let factorial = 1;
    for (let i = 2; i <= a; i++){ 
        factorial *= i;
    }
    return factorial;
}


export const nombre = "matematicas";
