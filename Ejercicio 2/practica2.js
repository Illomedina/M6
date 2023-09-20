/*
<script>
    alert(1)
    document.getElementById("contenido1").style = "border: 2px solid"
    document.getElementById("contenido1").style = "display:none"
    
</script>
function div1(){
    document.getElementById("contenido1").style = "display:block"
    document.getElementById("contenido2").style = "display:none"
    document.getElementById("contenido3").style = "display:none"
}
function div2(){
    document.getElementById("contenido1").style = "display:none"
    document.getElementById("contenido2").style = "display:block"
    document.getElementById("contenido3").style = "display:none"
}
function div3(){
    document.getElementById("contenido1").style = "display:none"
    document.getElementById("contenido2").style = "display:none"
    document.getElementById("contenido3").style = "display:block"
}
*/
//Lo mismo pero mas funcional y comodo
hiddenall()

function show(id){
    hiddenall()
    document.getElementById(id).style = "display:block"
}

function hiddenall(){
    document.getElementById(1).style = "display:none"
    document.getElementById(2).style = "display:none"
    document.getElementById(3).style = "display:none"

}
