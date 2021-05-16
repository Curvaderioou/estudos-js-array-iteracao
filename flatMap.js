// uma juncao do flat com o map, retorna um novo array e executa um flat de profundidade 1

const arranjo = [1, 2, 3]

// abaixo fica igual um map, que é o que ele faz
arranjo.flatMap(value => [value * 2])

// se incluirmos mais [] ele vai deixar mais profundo o conteudo, cada indice em uma sub array
arranjo.flatMap(value => [[value * 2]])