//Crear Array
var nombres = []
//Guardar los valores
//Actualizar el contador
function añadirlista(){
    nombres.push(document.getElementById("texto").value)
    
    document.getElementById("contador").innerText =nombres.length
    updateContador()
}
function updateContador(){
    document.getElementById("contador").innerText =nombres.length
}
function mostrarvalores(){
    var html = "<ul>"
    for (let i = 0; i < nombres.length; i++) {
        console.log(nombres[i])
        html += "<li>"+ nombres[i] +" <button onclick='borrardatos("+i+")'>'Delete'</button>"
    }
    html+="</ul>"
    document.getElementById("lista").innerHTML=html
}
function borrardatos(index){
    nombres.splice(index,1)
    mostrarvalores()
    updateContador()
}