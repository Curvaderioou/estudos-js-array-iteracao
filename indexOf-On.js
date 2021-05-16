/*
o index Of permite encontrarmos o primeiro elemento que se encaixe no que estamos buscando, no caso o 16
*/

const idadeBebidaAlcoolica = [33, 66 , 19, 16, 30, 16, 16, 44]

// abaixo inserimos o que buscamos apos o indexOf
const ondeEstaMenor = idadeBebidaAlcoolica.indexOf(16)
console.log(ondeEstaMenor)


// com o lastIndexOf buscamos o ultimo

const idadeBebidaAlcoolica1 = [33, 66 , 19, 16, 30, 16, 16, 44]

// abaixo inserimos o que buscamos apos o indexOf, neste caso o index 6
const ondeEstaMenor1 = idadeBebidaAlcoolica.lastIndexOf(16)
console.log(ondeEstaMenor1)