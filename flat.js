/*
O flat retorna um novo array com todos os elementos de um sub-array concatenados de forma recursiva de acordo com a profundidade especificada (depth)
*/

// caso tenhamos array dentro de array - matriz, podemos colocar todas no mesmo nivel
const arrFlat = [0, 1, 2, 3, [4, 5]]

arrFlat.flat();
/*
acima foi gerado um novo array, como nao foi inserido parametro o 1 é considerado como padrao, de profundidade de busca da matriz
*/

const idades = [14, 16, 18, [30, 40, 50, [70,80]]]

// abaixo ira retornar uma array mais o primeiro nivel de profundidade
idades.flat();

//abaixo ira retornar uma array mais o primeiro e segundo nivel de profundidade
idades.flat(2);