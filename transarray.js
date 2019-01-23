var omar = {
  nombre: 'Omar',
  apellido:'hack',
  altura: 1.68

}
var dharma = {
  nombre: 'Omar',
  apellido: 'Figueroa',
  altura: 1.60
  }
var mat = {
    nombre:'Mat',
    appelido: 'Bell',
    altura: 1.58

  }
var ale = {
    nombre: 'Alejandro',
    apellido:'lala',
    altura:1.72

  }
var vicky = {
      nombre: 'Vicky',
      apellido: 'Zapata',
      altura: 1.56
  }
var paula = {
      nombre: 'Paula',
      apellido: 'Barros',
      altura: 1.76
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


// se crea la funcion map nos va permitior transformar

var personasCms = personas.map(pasarAlturaACms)



console.log (personasCms)
