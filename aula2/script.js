function logar(){
let nomeUsuario
let senhaUsuario

while (true) {
    nomeUsuario = document.getElementById("Login").value
    senhaUsuario = document.getElementById("Senha").value

    if (nomeUsuario === "1234" && senhaUsuario === "1234"){
        alert("Logado")
        break;
    }
    alert("login ou senha invalidos")
}
}
