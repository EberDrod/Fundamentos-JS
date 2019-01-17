//UN objeto reune caracteristicas que tienen en comun pueden ser strings nuemeroetc
//Este ejemplo destructura un objeto
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

function imprimiNombeEnMayusculas(persona){
    //var nombre = persona.nombre.toUpperCase()
    var { nombre} = persona
    console.log(nombre.toUpperCase())
}

function imprimiNombeEnMayusculas2({apellido}){
    console.log(apellido.toUpperCase())

}

var obj1 = {
	obj2 : {
		nombre: 'victor',
		edad: 19
	}
}

/*functionsaludar(obj){
	var {nombre, edad} = obj.obj2
	console.log(`Hola me llamo ${nombre} y tengo ${edad} años`)
}
saludar(obj1)*/


function imprimirNombreYedad({nombre,edad}){
    //Hola, ,me llamo Eber y tengo 28 años
    //Hola, me llamo Dario y tengo 28 años

}



imprimiNombeEnMayusculas(eber)
imprimiNombeEnMayusculas(dario)
//imprimiNombeEnMayusculas({nombre: 'Pepito' })
//imprimiNombeEnMayusculas2({apellido: 'Gomez' })

//Funcion agregada para aaumentar la edad
// Los objetos se pasan con referencia
function cumpleanos(persona){
    return{
        ...persona,
        edad: persona.edad += 1

      }


}

 // El objeto que modificamos se vuelve una nueva Funcion
