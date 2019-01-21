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
const INCREMENTO_PESO = 0.2
const DIAS_DEL_A = 365

const aumentarDePeso = persona => persona.peso +=  INCREMENTO_PESO
const adelgazar = persona => persona.peso -= INCREMENTO_PESO

for(var i = 1; i <= DIAS_DEL_A; i++ ){
  var random = Math.random()

  if (random < 0.25){
    //AumentadePeso
    aumentarDePeso(eber)
  }else if (random < 0.5) {
    //Adelgazar
    adelgazar(eber)

  }
}



console.log (`Al final del año ${eber.nombre} pesa ${eber.peso.toFixed(2)}kg` )
