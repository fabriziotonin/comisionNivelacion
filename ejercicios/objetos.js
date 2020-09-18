let autos = []
// Objetos tienen propiedades 

let auto = {
  color: "Azul",
  marca: "Mercedes",
  anio: 2020,
  enceder: function(p){
    if(p){
       console.log("El auto encendio")
    }else(
       console.log("Esta apagado")
    )
  }
}

let auto2 = {
  color: "Gris",
  marca: "Audi",
  anio: 2020,
  enceder: function encender(p){
    if(p){
       console.log("El auto encendio")
    }else(
       console.log("Esta apagado")
    )
  }
}


// Para acceder a una propiedad 

// console.log(auto.color);
// console.log(auto["marca"]);

// Como agregar una propeidad

auto.precio = 10000;

// Como cambiar el valor de un objeto  

auto.precio = 25000; 
auto.color = "Negro";

// Como quitar una propiedad 

delete auto.anio;

// Como recorrer un objeto 

for(let propiedades in auto){
console.log(`${propiedades} es : ${auto[propiedades]}`);
}

autos.push(auto,auto2);

console.log(autos);

console.log("Este es mi array ",autos[0].marca = "Ford");
