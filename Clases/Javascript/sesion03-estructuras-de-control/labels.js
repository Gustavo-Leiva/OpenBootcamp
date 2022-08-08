// break y continue
// labels permitene nombrar los bucles while y controlar mejor el break y continuos no son las mejores prácticas.

let unidades = 0;
let decenas = 0;

//While sin usos de etiquetas

//bucle externo controla las decenas, bucle while controla las unidades
while (true) {
  console.log(`El número actual es: ${decenas}${unidades}`);
  unidades++;
  while (true) {
    if (unidades === 10) {
      unidades = 0;
      break;
    }
  }

  decenas++;
  if (decenas === 2) {
    break;
  }
}

//While  usando los labels
bucleDecenas: while (true) {
  bucleUnidades: while (true) {
    console.log(`El número actual es: ${decenas}${unidades}`);
    unidades++;
    if (unidades === 10) {
      unidades = 0;
      break bucleUnidades;
    }
    if (decenas === 2) {
      break bucleDecenas;
    }
  }
  decenas++;
}
console.log("Ya hemos terminado");
