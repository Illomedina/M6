var x = 2;
var y = "2"
var j = true
if (x = y) { // La diferencia entre == e === es que == si es el mismo valor lo acepta independientemente del tipo de valor, con === tiene en cuenta el tipo de valor también, es decir no puedo mezclar un int y un String.
    alert("Son Iguales") //alert crea una ventana emerjente con el texto.
}
function holamundo(){ //Crear la función
    console.log("Hola, Mundo!") //Contenido de la función
}
holamundo() //Llamar la función

function parametrofuncion(valor,valor2,valor3){
    valor = valor +1
    console.log(valor)
    console.log(valor2)
    console.log(valor3)
}
 parametrofuncion("Hola 1","Hola 2","Hola 3")
 //Se puede llamar a la función saltandome el primer valor solo si dejo un String vacío P.ej " "
console.log(typeof(x))
console.log(typeof(y))
console.log(typeof(j))

console.error(y)
console.warn("Cuidadorl")