function calcular(){
    let numero = parseInt(document.getElementById("numero").value)

    for(i=1;i<=10;i++){
        console.log(`A tabuada do  ${numero} é ${numero} * ${i} = ${numero*i}`)
    }
}