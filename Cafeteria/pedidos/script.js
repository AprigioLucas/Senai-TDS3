function comecar() {
    var nome = document.getElementById("exampleFormControlInput1").value;
    show(nome);
  }
  
  function show(nome) {
    document.getElementById("nomePrint").textContent = nome;
    var div = document.getElementById("selects-div");
    console.log(div, "meu console log para ver recebimento");
    if (nome && nome.trim() !== "") {
      div.style.display = "block";
      document.getElementById("exampleFormControlInput1").style.background =
        "none";
    } else {
      document.getElementById("error").style.display = "flex";
    }
  }
  
  function fechar() {
    document.getElementById("error").style.display = "none";
    document.getElementById("exampleFormControlInput1").style.background =
      "lightpink";
  }

function calcularTotal(){
    var selectPratos = document.getElementById("selectPrato");
    var selectBebidas = document.getElementById("selectBebida");
    var selectSobremas = document.getElementById("selectSobremesa");
    var resultadoSpan = document.getElementById("resultado");
    
    // console.log(selectPratos.value);

    var total =0
    var prato =0
    var bebida =0
    var sobremesa =0
    
    switch (selectPratos.value) {
        case "torrada":
            total = total + 16.90
            prato = 16.90
            break;
        case "Sanduiche":
            total = total + 14.90
            prato = 14.90
            break;
        case "torrada_com_ovo":
            total = total + 18.90
            prato = 18.90
            break;
     }

     switch (selectBebidas.value) {
        case "cha":
            total = total + 4.90
            bebida = 4.90
            break;
        case "cappucino":
            total = total + 6.90
            bebida = 6.90
            break;
        case "cafe_gelado":
            total = total + 12.50
            bebida = 12.50
            break;
     
     }

     switch (selectSobremas.value) {
        case "panqueca":
            total = total + 20.50
            sobremesa = 20.50
            break;
        case "iogurte":
            total = total + 16.90
            sobremesa = 16.90
            break;
        case "Chocolate Cheesecake":
            total = total + 24.90
            sobremesa = 24.90
            break;
     
     }

     document.getElementById("total").style.display = "flex"
     document.getElementById("prato-pronto").innerHTML = prato.toFixed(2)
     document.getElementById("bebida-pronto").innerHTML = bebida.toFixed(2)
     document.getElementById("sobremesa-pronto").innerHTML = sobremesa.toFixed(2)
     resultadoSpan.textContent = "R$ " + total.toFixed(2)

    }

function limpar(){
  document.getElementById("total").style.display = "none"
  document.getElementById("selects-div").style.display = "none"
  document.getElementById("exampleFormControlInput1").value = ""
  document.getElementById("resultado").value = ""
  document.getElementById("selectPrato").value = "Selecione um prato"
  document.getElementById("selectBebida").value = "Selecione uma bebida"
  document.getElementById("selectSobremesa").value = "Selecione uma sobremesa"
}




