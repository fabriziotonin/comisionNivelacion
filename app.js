// ======== Clases ======== 
// Un molde/plantilla objetos 
// Sirve para crear objetos de manera mas facil
// Se usa el prefijo this
// Poseen metodos
// Prefijos Get para traer informacion sobre el objeto
// Prefijo Set es para modificar la informacion del objeto
// Una clase se define con Mayusculas la primera letra (Capitalize) 

let persona0 = {
  nombre : "Agustin",
  apellido: "Gigli",
  edad: 23,
  saludar: function(){
    console.log("Hola desde una objeto " + this.nombre)
  }
}


class Persona{
  // Todo lo que esta aqui es un objeto 
  constructor(nombre,apellido,edad){
    this.nombre = nombre;
    this.apellido = apellido;
    this.edad = edad
  }
  // Metodos
  
  saludar(){
    console.log(`Hola ${this.nombre}`);
  }
  
}

let persona1 = new Persona("Agustin","Gigli",23);
let persona2 = new Persona ("Jime",'Bulacio',40);
let persona3 = new Persona ("Mica" , "Donofrio", 20)
let persona4 = new Persona ("Paula", "Lazarte",23);


let claseDeNivelacion = [];

for (let i = 0; i < 3; i++) {
  let nombre = prompt("nombre")
  let apellido = prompt("apellido")
  let edad = prompt("edad")
  
  let persona = new Persona(nombre,apellido,edad)
  
  claseDeNivelacion.push(persona)
}



// claseDeNivelacion.push(persona1,persona2,persona3,persona4);

