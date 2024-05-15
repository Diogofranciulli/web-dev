 const pessoas = ['fulano', 'ciclano', 'beltrano']

/*  for(i = 0; i <=10; i++){
    console.log(pessoas[1])
} */

pessoas.forEach(
    function rodarArray(pessoa){
        console.log(pessoa.toLowerCase())
    }
) 
 

pessoas.forEach(pessoa =>console.log(pessoa.toLowerCase()))

const pessoasModificado = 
 pessoas.map(pessoa => console.log(pessoas.toLowerCase))

 function modificarPessoas(array){
    return array.map(pessoas => pessoa.toLowerCase())
 }
