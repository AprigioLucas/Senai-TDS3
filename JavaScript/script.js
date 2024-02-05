function soma(){
    var num1 = document.getElementById("num1").valueAsNumber;
    var num2 = document.getElementById("num2").valueAsNumber;
    var res = num1+num2;
    console.log(res);
    document.getElementById("resSoma").textContent = res.toFixed(2);
    
}
function subtracao(){
    
    var num3 = document.getElementById("num3").valueAsNumber;
    var num4 = document.getElementById("num4").valueAsNumber;
    var res = num3-num4;
    console.log(res);
    document.getElementById("resSub").textContent = res.toFixed(2);
}

function divisao(){
    
    var num5 = document.getElementById("num5").valueAsNumber;
    var num6 = document.getElementById("num6").valueAsNumber;
    var res = num5/num6;
    console.log(res);
    document.getElementById("resDivi").textContent = res.toFixed(2);
}

function multiplicacao(){
    
    var num7 = document.getElementById("num7").valueAsNumber;
    var num8 = document.getElementById("num8").valueAsNumber;
    var res = num7*num8;
    console.log(res);
    document.getElementById("resMult").textContent = res.toFixed(2);
}

function media(){

var num9 = document.getElementById("num9").valueAsNumber;
var num10 = document.getElementById("num10").valueAsNumber;
var num11 = document.getElementById("num11").valueAsNumber;
var res = (num9+num10+num11) / 3;
console.log(res);
document.getElementById("resMedia").textContent = res.toFixed(2);

}