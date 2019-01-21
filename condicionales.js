/*var eber = {
  nombre:'Eber',
  apellido: 'Peña',
  //edad: '28',
  ingeniero: false,
  concinero: false,
  cantante: true,
  dj:false,
  guitarrista: false,
  //drone: true
}

function imprimirProfesiones(persona) {
  console.log (`${persona.nombre} es:`)

  if(persona.ingeniero){
    console.log('Ingeniero')
  } else {
    console.log('No es ingeniero')
  }

  if(persona.concinero){
      console.log('Cocinero')
  }

  if(persona.cantante){
    console.log('Cantante')
  }
  if(persona.dj){
    console.log('DJ')
  }

  if(persona.guitarrista){
    console.log('Guitarrista')
  }

  if (persona.drone)
    console.log('Piloto de Drone')
}

imprimirProfesiones(eber)*/

var eber = {
      nombre:'Eber',
      edad:20,
  }

/*function mayorDeEdad(persona){
  console.log(`${persona.nombre} tiene ${persona.edad},`)

if (persona.edad > 18){
  console.log('Es mayor de Edad')
  }
if (persona.edad < 18){
  console.log ('Es menor de edad')
}
if (persona.edad > 19 ){
  console.log ('Hola soy un tipo de 19 años')
}
}
mayorDeEdad(eber)*/

// Funciones que retornan valores
var juan = {

    nombre: 'Juan',
    apellido:'Gomez',
    edad:13,
}

function  imprimirSiEsMayorDeEdad (persona){
    if (persona.edad >= 18){
      console.log (`${persona.nombre} es mayor de edad`)
    }else {
      console.log(`${persona.nombre} es menor de edad`)
}
}
