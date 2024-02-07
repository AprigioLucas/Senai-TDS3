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

    var numeroTelefone = "5541998802927";

    var linkWhatsApp = "https://wa.me/" + numeroTelefone + "?text=NOME" + Nome_Global + " - " + Mensagem_Global;

    window.open(linkWhatsApp, "_blank")
}