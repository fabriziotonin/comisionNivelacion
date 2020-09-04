// Los Arrays son un conjunto de datos guardados con una posicion
let arrays = ["Agustin","Mercedes","Paula","Mercedes","Jimena","Fabrizio"];
// La posicion de un dato array[1]
// console.log(arrays[1]);
// nos muestra el elemento de la posicion 1 que seria Paula 

// length nos muestra la cantidad de elementos en el array 
// console.log(arrays.length);
// para agregar algo en nuestro array en la ultima posicion 
// arrays.push("Fabrizio");
// para quitar algo en la ultima posicion 
// arrays.pop();

// para eliminar ,reemplazar o agregar
//arrays.splice(3,1,"Javier"); //para reemplazar
arrays.splice(1,0,"Micaela","Javier") //para agregar
arrays.splice(1,2)


// me sirve para obtener valores indicando un inicio y un finally. El inicio esta definido por la posicion y el fin por la cantidad de elementos en el array 

let nuevoArray = arrays.slice(3,5);

// map sirve para recorrer el array 

let mapArray = arrays.map(function(nombre){
  return console.log(`Hola ${nombre}`);
});

// find nos sirve para encontrar el primer elemento que coincida con la condicion
let findArray = arrays.find(function(nombre){
return nombre == "Mercedes"
});
// find nos sirve para encontrar el todos elementos que coincida con la condicion
let filterArray = arrays.filter(function(nombre){
  return nombre == "Mercedes"
});

// Includes nos eprmite encontrar palabras similares o elemetos 
let includeArray = arrays.filter(function(nombre){
  return nombre.includes("a")
});





