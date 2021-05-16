// usamos o every para saber se todas os indices satisfazem uma condicao, valor booleano

const tempoLivre = [50, 30, 25, 40, 80, 32, 18]

// abaixo vemos se todos os indices tem mais que 15 ,a resposta é true
const tempoVerJogo = tempoLivre.every(tempo => tempo > 15);
console.log(tempoVerJogo)


const tempoLivre1 = [50, 30, 25, 40, 80, 32, 18]

// abaixo vemos se todas as condições tem o tempo maior que 20, false, pois o ultimo indice é menor
const tempoVerJogo1 = tempoLivre1.every(tempo => tempo > 20);
console.log(tempoVerJogo1)