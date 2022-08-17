//Funciones asincrónicas

function miAsinc(){
    //hace una llamada a una base de datos externa
    //puede darnos algún error.
}

//forma tradicional de consumir una promesa
// const miPromesa = new Promise ((resolve, reject) =>{
//     //si esta todo correcto
//     if(true){
//         resolve()
//     }
//     else{
//         reject()
//     }
// })

const miPromesa = new Promise((resolve, reject) =>{
    const i = Math.floor(Math.random()*2)
    if(i !== 0){
        resolve()
    }
    else{
        reject()
    }
})

miPromesa
.then(()=> console.log("Se ha ejecutado de forma correcta"))
.catch(()=> console.log("Error"))
.finally(()=>console.log("yo me ejecuto siempre"))