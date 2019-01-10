var nombre = 'Eber'
var apellido = 'Peña'
var edad = 28

edad  = ' 28 años'

console.log( 'Hola '+ nombre + ' ' + apellido)
console.log ('Tengo ' + edad)

///Jugar con el navegador configurandoo  ""
var peso = 75

//Esta funcion configura el nombre en mayuscula
var nombreEnMayusculas = nombre.toUpperCase()

//Esta funcion configura el nombre se convierta en minusculas
var appellidoEnMinusculas = nombre.toLowerCase()


//Esta funcion nos entrega solo la primera letra
var primeraLetraDelNombre = nombre.charAt()


//Catidad de letras que tiene un String
var cantidadDeLetrasDelNombre = nombre.length

//Concatenar Strings

//-var nombreCompleto = nombre + ' ' + apellido-

// Interpolacion de texto - Ap
var nombreCompleto = `${nombre} ${apellido.toUpperCase()}`


//Este string selecciona solo la letra de cada uno de los strigns
var str = nombre.charAt(1) + nombre.charAt(2)
