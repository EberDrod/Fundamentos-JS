///No existe la herencia como tal, son clases de JS
/*Creando prototipos*/
function Persona(nombre, apellido){
  // Asi se guarda
  this.nombre = nombre
  this.apellido = apellido
  return this
}

//New se usa para crear prototipos si ponemos eber en el navgador nos aparece
var eber = new Persona ('eber','Peña')
