//

const miFuncion = val=>{
    if(typeof val === "number"){
        return 2 * val
    }
    
    //return false;
    throw new Error("El valor error debe ser de tipo número");
}

// const elDoble = (miFuncion("ala"));
// console.log = miFuncion("ala");

const numero = "8";



try{
    //código que puede fallar.
    console.log("estas ejecutandose de manera correcta");
    const doble = miFuncion(numero);
    console.log(doble);

}catch(e){
    // En caso de fallar, quiero que ejecutes.
    console.error(`El valor de e es : ${e}`);
    console.error("ERROR!");
} finally{
    console.log("Esto se va a ejecutar tanto si se produce algún error, como si no existe ninguno");
}

//serie de errores comunes a

//InternalError -Error en la recursividad.
//SintaxError -Error de sintaxis
//TypeError -Error en el tipo de error en una funcion creada 
//RangeError -Se trata de acceder a una posicion que tratamos de acceder
//ReferenceError -No existe esa referencia de error.


// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Error