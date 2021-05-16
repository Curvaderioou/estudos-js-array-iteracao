/* 
iterar elementos primeiro parametro é o item que estamos lendo e o segundo o index
o forEach apenas itera sobre os elementos.
*/

const numbers = [1, 2, 3, 4, 5];

numbers.forEach((num, index) =>{
 console.log(`O número ${num} está no index ${index}`)
})

//podemos fazer sem a necessidade de chaves tambem
numbers.forEach(num => console.log(num));

// abaixo como temos dois parametros, temos que colocar um () a mais
numbers.forEach((num, index)=> console.log(num, index));

// e o terceiro parametro é o array corrente
numbers.forEach((num, index, arr) => console.log(num, index, arr));