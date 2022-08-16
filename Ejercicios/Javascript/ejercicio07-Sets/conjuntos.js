
/*
Enunciado del ejercicio:
Crea un archivo llamado conjuntos.js que contenga las siguientes líneas
- Un nuevo Set con los nombres de tu familia
- Modifica el Set original añadiendo tu nombre (duplicado) (debería darte lo mismo)
- Modifica el Set original añadiendo el nombre "Javascript" (ya que empieza a formar parte de tu vida ;)

*/

const familia = new Set(["Gustavo", "Leandro", "Bryan", "Rosana"]);
console.log(familia);

const familia2 = new Set(["Gustavo", "Leandro", "Bryan", "Rosana", "Gustavo"]);
console.log(familia2);

familia.add ("Javascript");
console.log(familia);

