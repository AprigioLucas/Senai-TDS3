$(document).ready(function(){
    //recupera carrinho do local storage
    const carrinho = JSON.parse(localStorage.getItem("carrinho")) || [];

    //elemento da lista
    const listaElement = $("#lista");

    //elemento de total
    const totalElement = $("#total");

    function exibirCarrinho(){
        listaElement.empty();

        //variavel para acumular o preco
        let totalPreco = 0;

        //iteracao sobre os elementos do carrinho
        $.each(carrinho, function(index, item){
            //cria um elemento de lista para cada item
            const listItem = $("<li>").text(
                `${item.descricao} - Preço: R$ ${item.preco.toFixed(2)}`
            );

            const removeButton = $("<button>").text("❌").css("margin-left","10px").click(function(){
                removeItemDoCarrinho(index);
            })

            listItem.append(removeButton);
            listaElement.append(listItem);
            totalPreco += item.preco;
        });

        totalElement.text(`Total: R$ ${totalPreco.toFixed(2)}`)
    }
   
    function removeItemDoCarrinho(index){
        carrinho.splice(index, 1);
        localStorage.setItem("carrinho", JSON.stringify(carrinho));
        exibirCarrinho();
    }
   
    exibirCarrinho();
})

function gerarDocumentoWord(){
    const listaElement = document.getElementById("lista");
    const totalElement = document.getElementById("total");

    //clona a lista para evitar modificações diretas na original
    const listaClone = listaElement.cloneNode(true);

    //remover o botao de remove do word
    $(listaClone).find("button").remove();

    const listaHtml = listaClone.innerHTML;
    const totalHtml = totalElement.innerHTML;

    const conteudoHtml = `
        <html>
            <head>
            <meta charset="UTF-8" />
            </head>
            <body>
                <h1>PEDIDO CONFIRMADO</h1>
                <h3>Agradecemos sua preferencia</h3>
                <br/>
                ${listaHtml}
                <br/><br/>
                ${totalHtml}
            </body>    
        </html>
    `;

    const blob = new Blob([conteudoHtml],{type: "appliccation/msword"});
    const link = document.createElement("a");

    link.href = URL.createObjectURL(blob)
    link.download = "Nota_Fiscal.doc"
    link.click();
    document.getElementById("pedido").style.display = "block"
}

function successClose(){
    document.getElementById("pedido").style.display = "none";
    // $("#pedido").css({display: "none"})

}