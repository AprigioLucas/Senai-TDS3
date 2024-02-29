function media(){

    var num1= document.getElementById("num1").valueAsNumber;
    var num2 = document.getElementById("num2").valueAsNumber;
    var num3 = document.getElementById("num3").valueAsNumber;
    var res = (num1+num2+num3) / 3;
    console.log(res);
    
     var x = document.getElementById("resMedia");
     var resboa = document.getElementById("cond");
     var resruim = document.getElementById("condn");
    
     if (res > 6){
         x.style.color = "green"
         resboa.style.display = "block"
         resboa.style.color = "green"
         resruim.style.display = "none"
        //  textContent.display("😁🤑🙌👍")
    
    
     }else{
         x.style.color = "red"
         resruim.style.display = "block"
         resruim.style.color = "red"
         resboa.style.display ="none"    
        //  textContent.display("😢🤢😒🤔")
     }
    
    document.getElementById("resMedia").textContent = res.toFixed(2);



}