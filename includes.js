/*
conseguimos saber se um determinado item está dentro de um array, retornando um valor booleano
*/


// no caso abaixo buscamos por um item na array, e se tiver retorna true, caso contrario false
const casasCondominioFogo = ["não pegou fogo","não pegou fogo", "não pegou fogo", "pegou fogo", "não pegou fogo" ]

// abaixo retorno true
const sistemaRastrearFogo = casasCondominioFogo.includes("pegou fogo");
console.log(sistemaRastrearFogo)



const casasCondominioFogo1 = ["não pegou fogo","não pegou fogo", "não pegou fogo", "pegou fogo", "não pegou fogo"]
//abaixo retorno false
const explosao = casasCondominioFogo1.includes("explosão");
console.log(explosao)