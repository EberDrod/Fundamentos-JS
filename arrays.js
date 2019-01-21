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

/* esto va en chrome , ----->var persona [0]['altura']*/
for (var i = 0; i < personas.length; i++){
  var persona = personas[i]
  console.log (`${persona.nombre} mide ${persona.altura}mts`)
  }
