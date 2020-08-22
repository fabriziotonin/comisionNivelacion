
// template string ` ` no sirve para escribir js y texto en una misma linea ${codigo js}
// let nombre = "José"
// let nombre2 = 'Juanita'
// console.log("hola como estas " + nombre + " y hola " + nombre2)
// console.log(`hola como estas ${nombre} y hola como estas ${nombre2}`)

let num1 = parseInt(prompt("ingresa un numero"))
// 1- let i = 0 que nos permite
// 2- es la condicion que nos permite ejecutar un numero de veces el codigo

// NAN = Not a number no es un numero
// isNaN()
for( let i = 0; i <= 10 ; i++ ){
  if(!isNaN(num1)){
    // let resultado = num1 * i
    document.write(`${num1} y ${i} es = ${num1 * i}`)
    document.write("<br>");
  }else{
    alert("No es un numero");
    break;
  }
}

