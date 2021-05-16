/*
Conseguimos ver se algum indice do array satisfaz a determinada condição, lembrando que retorna um valor booleano
*/

const idadePessoasFesta = [18, 19, 20, 18, 17, 30]

const pessoasMenorIdade = idadePessoasFesta.some(value => value < 18)
console.log(pessoasMenorIdade)
// acima podemos trocar os valores menor de idade


const idadePessoas = [18, 19, 20, 18, 17, 30]
const idadesPar = idadePessoas.some(value => value % 2 === 0)
console.log(idadesPar)

// utilizando o some de maneira mais complexa

const estudantes =[
  {nome: "Felipe", nota:5},
  {nome: "Fred" , nota:7},
  {nome:"Enia", nota:4},
]

// abaixo descubro se tem alguem na condicao
const aprovadosUniversidade = estudantes.some(estudante => estudante.nota >= 7);
console.log(aprovadosUniversidade)

// abaixo descubro qual o elemento
const aprovadosUniversidadeFind = estudantes.find(estudante => estudante.nota >= 7);
console.log(aprovadosUniversidadeFind)

// abaixo descubro onde ele esta - index
const aprovadosUniversidadeIndex = estudantes.findIndex(estudante => estudante.nota >= 7);
console.log(aprovadosUniversidadeIndex)