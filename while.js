var eber  = {
    nombre: 'Eber',
    apellido: 'Peña',
    edad: 28,
    peso:80
}

// Simular el transcurso de un año

console.log (`Al inicio del año ${eber.nombre} pesa ${eber.peso}kg`)

/*function  aumentarDePeso (persona){
  return  persona.peso += 200
}
*/
const INCREMENTO_PESO = 0.3
const DIAS_DEL_A = 365

const aumentarDePeso = persona => persona.peso +=  INCREMENTO_PESO
const adelgazar = persona => persona.peso -= INCREMENTO_PESO
const comeMucho = () => Math.random() < 0.3
const realizaDeporte =()=> Math.random() < 0.4

const META = eber.peso - 5
var dias = 0

while (eber.peso > META){
  
  if(comeMucho()){
    //Aumento de Peso
    aumentarDePeso(eber)
  }
  if(realizaDeporte()){
    //Adelgazar
    adelgazar(eber)
  }
  dias += 1
}

console.log (`Pasaron ${dias} dias  hasta que ${eber.nombre}adelgazó 3kg`)
