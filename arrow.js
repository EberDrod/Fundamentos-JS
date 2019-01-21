var juan = {

    nombre: 'Juan',
    apellido:'Gomez',
    edad:19,
}
///Numero magico
const MAYORIA_DE_EDAD = 18
/* Esta es la misma funcion que la de abajo
var esMayorDeEdad = function (persona){
  return persona.edad >= MAYORIA_DE_EDAD
}*/
// Implicitamente se hace una comparación
const esMayorDeEdad = ({edad}) => edad >= MAYORIA_DE_EDAD

// Velo como un nomenclatura para hacer buenas practicas

function  imprimirSiEsMayorDeEdad (persona){
    if (esMayorDeEdad(persona)){
      console.log (`${persona.nombre} es mayor de edad`)
    }else {
      console.log(`${persona.nombre} es menor de edad`)
}
}
 /// Esta es otra manera de escribir el código anterios ARROW FUNCTION
