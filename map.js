/*
O map retorna um novo array do mesmo tamanho, iterando cada item de um array
*/

const arr = [1, 2, 3, 4, 5];

// no caso abaixo ele nao vai mexer no array, mas vai retornar um novo array com a expressao

arr.map((value, index)=> value + index);
arr.map((value, index)=> value * index);
arr.map((value, index) => index + index);
// em todos os casos acima ele nao mexe com o array de origem, e sim criando um novo

