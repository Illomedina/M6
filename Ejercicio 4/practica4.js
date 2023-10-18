async function Marvel() {
    const response = await fetch("http://gateway.marvel.com/v1/public/comics?ts=9999999999999998&apikey=df2ec526ef5ab2fb57d9dfa326d82a8f&hash=82ce71f4aa5524989b1688e792b74f0b");
    const marvel = await response.json();
    localStorage.setItem("comics",JSON.stringify(marvel))
    console.log(marvel);
}
Marvel()
var nuevoContenido = "<p></p>";
var local = JSON.parse(localStorage.getItem("comics"));
var comicsData = local['data']['results'];
for (i = 0; i < comicsData.length; i++) {
    var title = comicsData[i]['title'];
    var descripcion = comicsData[i]['description'] || 'Sin descripción';
    
    var body = document.querySelector("#comicsTabla tbody");
    var fila = body.insertRow();
    var celda1 = fila.insertCell(0);
    var celda2 = fila.insertCell(1);
    var celda3 = fila.insertCell(2);

    celda1.innerHTML = title;
    celda2.innerHTML = descripcion;

    var borrarboton = document.createElement("button");
    borrarboton.innerHTML = "Eliminar";
    borrarboton.addEventListener("click", function () {
        var fila = this.parentNode.parentNode;
        var filaIndex = fila.filaIndex - 1;
        body.removeChild(fila);
        comicsData.splice(filaIndex, 1);
        localStorage.setItem("comics", JSON.stringify({ data: { results: comicsData } }));
    });
    celda3.appendChild(borrarboton);
}




/*
for (i = 0; i <= local['data']['results'].length; i++){
    var y = " "
    var x  = local['data']['results'][i]['title']
    var y  = local['data']['results'][i]['description']
    document.getElementById("comicsData").innerHTML += x  +"<br>"+"<br>"+"Descripción:"+"<br>" + y
    $("#comicsData").append(nuevoContenido);
    
}
*/
/*
$(document).ready(function)
$("#comicsData").append("<li>"+x"</li>")
*/