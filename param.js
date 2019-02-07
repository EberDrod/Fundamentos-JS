var eber = {
    //CLAVE & VALOR
    nombre: 'Eber',
    apellido: 'Peña',
    edad:28
  }


var Ericka = {
    //CLAVE & VALOR
    nombre: 'Ericka',
    apellido: 'Luna',
    edad:28
  } 

var beto = {
    nombre:'Beto',
    apellido: 'Cuevas',
    edad:32
}

class Desarrollador extends Persona {
    contructor(nombre,apellido, altura){
        super(nombre, apellido, altura)
    }
}


saludar(){
    console.log(`hola, me llamo ${this.nombre} ${this.apellido} y soy developer`)
}

function responderSaludo(){
    console.log(`Buen dia ${nombre} ${apellido}`);
    if(esDev){
        console.log(`AH mira no sabia que eras developer`);
    }
}

var eber = new Persona ('Eber', 'Peña', 1.72)
var beto = new Persona ('Beto', 'Cuevas', 1.65)
var erika = new Desarrollador ('Ericka','Luna',1.89)

eber.saludar()
beto.saludar()
erika.saludar() 