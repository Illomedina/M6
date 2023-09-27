async function Marvel() {
    const response = await fetch("http://gateway.marvel.com/v1/public/comics?ts=9999999999999998&apikey=df2ec526ef5ab2fb57d9dfa326d82a8f&hash=82ce71f4aa5524989b1688e792b74f0b");
    const marvel = await response.json();
    localStorage.setItem("comics",JSON.stringify(marvel))
    console.log(marvel);
}
Marvel()
var separador = "";
var cadena = "";

var nuevoContenido = "<p></p>";
var local = JSON.parse(localStorage.getItem("comics"));
for (i = 0; i <= local['data']['results'].length; i++){
    var y = " "
    var x  = local['data']['results'][i]['title']
    var y  = local['data']['results'][i]['description']
    document.getElementById("comicsData").innerHTML += x  +"<br>"+"<br>"+"Descripción:"+"<br>" + y
    $("#comicsData").append(nuevoContenido);
    
}

/*
$(document).ready(function)
$("#comicsData").append("<li>"+x"</li>")
*/