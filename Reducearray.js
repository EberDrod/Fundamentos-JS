var omar = {
  nombre: 'Omar',
  apellido:'hack',
  altura: 1.68,
  cantidadDelibros :91

}
var dharma = {
  nombre: 'Omar',
  apellido: 'Figueroa',
  altura: 1.60,
  cantidadDelibros: 182
  }
var mat = {
    nombre:'Mat',
    appelido: 'Bell',
    altura: 1.58,
    cantidadDelibros:  150
  }
var ale = {
    nombre: 'Alejandro',
    apellido:'lala',
    altura:1.72,
    cantidadDelibros:38

  }
var vicky = {
      nombre: 'Vicky',
      apellido: 'Zapata',
      altura: 1.56,
      cantidadDeLibros:90
  }
var paula = {
      nombre: 'Paula',
      apellido: 'Barros',
      altura: 1.76,
      cantidadDeLibros:165
  }

// Los arreglos se proponen con []
var personas = [omar, dharma, mat, ale, vicky, paula]

/*Se agrego arrow funcion*/
const esAlta = ({altura}) => altura > 1.8

//Función como filter() como condicion
var personasAltas = personas.filter(function (persona){
  return persona.altura > 1.8
})

const pasarAlturaACms = persona =>{
  persona.altura *=  100
  return persona
}


// se crea la funcion map nos va permitir transformar

/*var personasCms = personas.map(pasarAlturaACms)


var acum = 0

for(var i = 0; i < personas.length;i++){
  acum = acum + personas[i].cantidadDeLibros
}*/


//Esto es lo mismo que var acum = 0

const reducer = (acum, {cantidadDeLibros}) => acum + cantidadDeLibros

var totalDeLibros = personas.reduce (reducer,0)

console.log (`En total todos tienen ${totalDeLibros } libros`)
