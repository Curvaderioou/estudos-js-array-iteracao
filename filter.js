/*
O filter serve para buscarmos todos os elementos que satisfaçam a condição, e nao só o primeiro como o find.
*/

const predioAndares = [1, 2, 3, 4, 5]

// abaixo solicitamos todos os andares acima do 2.
const acimaDoSegundoAndar = predioAndares.filter(andar => andar > 2)
console.log(acimaDoSegundoAndar)

// poderiamos inserir value no lugar do andar, sai na mesma, sao os itens da array