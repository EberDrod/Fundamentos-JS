var juan = {

    nombre: 'Juan',
    apellido:'Gomez',
    edad:13,
}
///Numero magico
const MAYORIA_DE_EDAD = 18

function esMayorDeEdad(persona){
  return persona.edad >= MAYORIA_DE_EDAD
}

function  imprimirSiEsMayorDeEdad (persona){
    if (esMayorDeEdad(persona)){
      console.log (`${persona.nombre} es mayor de edad`)
    }else {
      console.log(`${persona.nombre} es menor de edad`)
}
}
 /// Esta es otra manera de escribir el código anterios ARROW FUNCTION
