$(document).ready(function(){

    var imagen1 = $("#imagen1");
    imagen1.click(function(){
        $("#imagen1").hide()
    });

    var titulo = $(".destacado");
    titulo.click(function(){
        $(".destacado").css("color","blue")
    });

    var serena = $("#parr1");
    serena.mouseenter(function(){
        $("#parr1").append(" en 2021")
    });




    
    


    

    







});
