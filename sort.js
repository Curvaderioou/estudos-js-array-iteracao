/*
Ordena elementos de um array de acordo com a condição
*/

const times = [
  {time:"São Paulo", pontos: 30},
  {time:"Palmeiras", pontos: 28},
  {time:"Santos", pontos: 12},
  {time:"Botafogo", pontos: 14},
  {time:"Atletico GO", pontos: 19},
  {time:"Atletico PR", pontos: 26},
  {time:"Coritiba", pontos: 12},
  {time:"Bragantino", pontos: 21},
  {time:"Flamento", pontos: 29},
  {time:"Vasco", pontos: 2}
]

//os parametros serao current e o next
const classificacao = times.sort((current, next) => current.pontos - next.pontos)
// no caso acima escolhemos o - que representam a ordem, sera do menor ao maior
console.log(classificacao)


// abaixo faremos o contrario
const classificacao1 = times.sort((current, next) => next.pontos - current.pontos)
// no caso acima escolhemos o - que representam a ordem, sera do menor ao maior
console.log(classificacao1)