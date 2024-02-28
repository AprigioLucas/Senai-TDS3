var Nome_Global;
var Mensagem_Global;

function descCSS(){



}

function descJavaScript(){
    


}

function descHTML(){
   
    

}


function conferirMensagemWhatsapp(){
    var nome = document.getElementById("nome").value
    var mensagem = document.getElementById("mensagem").value
    // console.log(nome,mensagem),"meus dados digitados"
    Nome_Global = nome;
    Mensagem_Global = mensagem;

    document.getElementById("confNome").textContent = nome;
    document.getElementById("confMgs").textContent = mensagem;
}

function enviar(){

    var numeroTelefone = "5541996841414";

    var linkWhatsApp = "https://wa.me/" + numeroTelefone + "?text=Nome: " + Nome_Global + " - " + Mensagem_Global;

    window.open(linkWhatsApp, "_blank")
}

function css_descricao(){
    var html_desc = document.getElementById("css_desc");
    var css_desc = document.getElementById("html_desc");
    var js_desc = document.getElementById("js_desc");
    if(html_desc.textContent == ""){
        html_desc.textContent = "HTML (Hypertext Markup Language) é o código que você usa para estruturar uma página da Web e seu conteúdo.";
        css_desc.textContent = ""; 
        js_desc.textContent = "";
    }else{
        clear();
    }
}

function html_descricao(){
    var html_desc = document.getElementById("css_desc");
    var css_desc = document.getElementById("html_desc");
    var js_desc = document.getElementById("js_desc");
    if(css_desc.textContent == ""){
        html_desc.textContent = "";
        css_desc.textContent = "CSS (Cascading Style Sheets) é o código que você usa para estilizar sua página da Web.";
        js_desc.textContent = "";
    }
    else{
        clear();
    }
    
}
function js_descricao(){
    var html_desc = document.getElementById("css_desc");
    var css_desc = document.getElementById("html_desc");
    var js_desc = document.getElementById("js_desc");
    if(js_desc.textContent == ""){
        html_desc.textContent = "";
        css_desc.textContent = "";
        js_desc.textContent = "JavaScript é uma linguagem de script orientada a objetos usada para tornar as páginas da Web interativas.";
    }
    else{
        clear();
    }
    
}

function clear(){
    document.getElementById("css_desc").textContent = "";
    document.getElementById("html_desc").textContent = "";
    document.getElementById("js_desc").textContent = "";
}

function grow(element){
    element.style.height = "10px";
    element.style.height = (element.scrollHeight)+"px";
}