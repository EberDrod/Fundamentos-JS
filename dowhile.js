var contador = 0

const llueve = () => Math.random() < 0.25


//Si se cumple la funcion  por lo menos alguna vez se vuelve a repetir el proceso
do {
  contador++
}while(!llueve())

var frecuencia = contador === 1 ? "vez":"veces";
console.log(`Fui a ver si llovia ${contador}${frecuencia}`);
