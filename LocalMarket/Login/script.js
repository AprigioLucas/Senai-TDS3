function login(){
    var userName= $('#user').val();
    var password = $('#password').val();

    if(userName && password && userName === "Lucas" && password === "Lucas"){
        const user = {
            name: userName,
            entryDate: formatarData(new Date()),
            id: Math.floor(Math.random() * 100000),
        }

        localStorage.setItem("user", JSON.stringify(user))
        window.location.href = "../Store"
        console.log("deu boa")
    }else{
        document.getElementById("error-modal").style.display = "flex";
        document.getElementById("user").style.borderColor = "2px solid red";
        document.getElementById("password").style.borderColor = "2px solid red";
    }
}

function closeError(){
    document.getElementById("error-modal").style.display = "none";
    document.getElementById("user").style.borderColor = "white";
    document.getElementById("password").style.borderColor = "white";

}

function showPassword(){
    var inputPassword = document.querySelector('#password');

    if(inputPassword.getAttribute("type")=== "password"){
        inputPassword.setAttribute("type", "text")
    }else{
        inputPassword.setAttribute("type", "password")
    }
}

function formatarData(item){

    var options = {
    
        month: "numeric",
        day: "numeric",
        hour:"numeric",
        minute: "numeric",
        second: "numeric"
    }
    return item.toLocaleString("pt-BR",options)
}