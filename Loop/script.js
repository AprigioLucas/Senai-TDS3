function contar(){

    const num = parseInt($('#numeroInput').val());

    if(isNaN(num)){
        $('#resultado').text("Digite números válidos")
        return;
    }

 var resultadoStr = "";
 if(num >= 100000){

 for(var cont = 1;cont <= num ; cont++){
    resultadoStr += cont + "<br>"
 
 }
   $('#resultado').html(resultadoStr)

 }else{
    $('#resultado').text("vai travar, droga pesada FDP! " + num)
}

}