/*
ele vai buscar no array determinado item que corresponda a uma determinada condição
*/

const lapis = [0, 4, 6, 8];

//fizemos uma const com os lapis, e buscamos o primeiro lapis que se encaixe na condição criada
const melhorLapisDesenho = arr.find(value => value >= 4);

// o retorno vai ser o lapis 4, pois é o primeiro que atende a determinacao.
console.log(melhorLapisDesenho)

/*
É possivel tambem fazer o find pelo index, assim ele vai retornar o index do item que primeiro satisfizer a condicao
*/

const borracha = [2, 4, 6, 9];

//nesse caso o retorno vai ser do index, como pedimos menor que 5, será o 2 que está no index 0
const melhorBorracha = borracha.findIndex(value => value < 5);

console.log(melhorBorracha)