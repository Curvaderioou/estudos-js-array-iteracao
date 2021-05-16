/*
Itera cada posição do array retornando um novo tipo de dado
*/

const nu = [1, 2, 3, 4, 5]

/*
Primeiro argumento é resultado, nesse caso "TOTAL"  que é o que ha gente quer, vai ser armazenado ali, o tipo dela vai estar no final, nesse caso 0 (inteiro-numero) de onde tambem é seu inicio, depois do total vem os parametros como no map, valor, index e o array, ficando assim
(resultado, valor, index, array) 
*/

//no caso abaixo pegamos o total que inicia em 0, e somamos ao valor de cada item.
nu.reduce((total, value) => total += value, 0)
// retorna 15


//retornando como string
nu.reduce((totalNomes, value) => totalNomes += value + " ","")
// retorna "1 2 3 4 5"
