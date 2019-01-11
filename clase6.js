//UN objeto reune caracteristicas que tienen en comun pueden ser strings nuemeroetc

var eber = {
  //CLAVE & VALOR
  nombre: 'Eber',
  apellido: 'Peña',
  edad:28


}

var dario = {

  nombre:'dario',
  apellido: 'Sarduscky' ,
  edad:27


}

//var nombreDario =

function imprimiNombeEnMayusculas({nombre}){
    //var nombre = persona.nombre.toUpperCase()
    console.log(nombre.toUpperCase())
}

function imprimiNombeEnMayusculas2({apellido}){
      console.log(apellido.toUpperCase())


}



imprimiNombeEnMayusculas(eber)
imprimiNombeEnMayusculas(dario)
imprimiNombeEnMayusculas({nombre: 'Pepito' })
imprimiNombeEnMayusculas2({apellido: 'Gomez' })
