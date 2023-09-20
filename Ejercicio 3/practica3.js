hiddenall()
show("signup")
let nombre = ''
let email = ''
let apellido = ''
let edad = ''
let contraseña = ''

function val_email(email){
    let val_correo = /\S+@\S+\.\S/
    return val_correo.test(email)
}
function signup(){
    document.getElementById("signup").style = "display:block"
    email = $("#emailinput").val()
    contraseña = $("#passinput").val()
    if (val_email(email)==false){
        document.getElementById("alerta").style = "display:block"
    }else if(contraseña < 1){
        document.getElementById("alerta").style = "display:block"
    }else
        show("datos")
        document.getElementById("alerta2").style = "display:none"

}
function datos(){
    document.getElementById("datos").style = "display:block"
    nombre = $("#nombre").val()
    apellido = $("#apellido").val()
    edad = $("#edad").val()
    if(nombre != '' && apellido != '' && edad > 0){
        show("resumen")
        document.getElementById("alerta2").style = "display:none"
    }else
        document.getElementById("alerta2").style = "display:block"

}
function resumen(){
    email = $("#emailinput").val()
    nombre = $("#nombre").val()
    apellido = $("#apellido").val()
    edad = $("#edad").val()
    document.getElementById("datos").style = "display:none"
    $("#nombreval").text(nombre)
    $("#apellidoval").text(apellido)
    $("#edadval").text(edad)
    $("#emailval").text(email)
    
    show("resumen")
}



function show(id){
    hiddenall()
    document.getElementById(id).style = "display:block"
}
function hiddenall(){
    document.getElementById("alerta").style = "display:none"
    document.getElementById("signup").style = "display:none"
    document.getElementById("datos").style = "display:none"
    document.getElementById("resumen").style = "display:none"

}