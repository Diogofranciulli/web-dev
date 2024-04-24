function clicar(){
    let numero1 =parseFloat (document.getElementById("numero1").value);
    let numero2 =parseFloat (document.getElementById("numero2").value);
    let resultado = document.getElementById("resultado");
    let soma = numero1 + numero2;
   
    resultado.innerText =`O resultado da soma é ${soma}`
    
}
function clique(){
    let numero1 =parseFloat (document.getElementById("numero1").value);
    let numero2 =parseFloat (document.getElementById("numero2").value);
    let resultado = document.getElementById("resultado");
    let subtracao = numero1 - numero2;
    resultado.innerText =`O resultado da soma é ${subtracao}`
}
function cliquezada(){
    let numero1 =parseFloat (document.getElementById("numero1").value);
    let numero2 =parseFloat (document.getElementById("numero2").value);
    let resultado = document.getElementById("resultado");
    let multiplicacao = numero1 * numero2;
    resultado.innerText =`O resultado da soma é ${multiplicacao}`
}
function clicada(){
    let numero1 =parseFloat (document.getElementById("numero1").value);
    let numero2 =parseFloat (document.getElementById("numero2").value);
    let resultado = document.getElementById("resultado");
    let divisao = numero1 / numero2;
    resultado.innerText =`O resultado da soma é ${divisao}`
}