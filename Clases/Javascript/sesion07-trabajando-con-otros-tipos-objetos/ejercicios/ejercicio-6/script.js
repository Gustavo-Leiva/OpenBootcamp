/* 
2 - Escribe un programa que pueda calcular el área de 3 figuras geométricas, triángulo, rectángulo y círculo. En primer lugar pregunta de qué figura se quiere calcular el área, después solicita los datos que necesites para calcularlo.
    triángulo = b * h/2
    rectángulo = b * h
    círculo = π * r2 (pi * radio al cuadrado)
*/

//declaro las Variables
let base;
let altura;
let radio;
let mensaje;
let areaTriangulo;
let areaRectangulo;
let areaCirculo;
let pi = 3.14;

mensaje = prompt("ingrese la figura geométrica, triángulo (t), rectángulo(r) o círculo(c)");

switch (mensaje) 
{
    case "t":
    base=parseInt(prompt("ingrese la base del triangulo"));
    altura = parseInt(prompt("ingrese la altura del triangulo"));   
    areaTriangulo = (base * altura)/2;
    console.log(`La area del triángulo es ${areaTriangulo}`);
    break;

    case "r": 
    base=parseInt(prompt("ingrese la base del rectangulo"));
    altura = parseInt(prompt("ingrese la altura del rectángulo"));  
    areaRectangulo = (base * altura);
    console.log(`La area del rectangulo es ${areaRectángulo}`);
    break;

    case "c": 
    areaCirculo = (pi * radio * 2);
    radio =parseInt(prompt("ingrese la radio del circulo"));
    console.log(`La area del circulo es ${areaCirculo}`);
    break;

    default: console.log('La figura geométrica no es válida');

}




