function solucao(lista) {
    const media = lista.reduce((total, numero) => (total + numero), 0)
    return console.log(media / lista.length)

}

function processData(input) {
    const strings = input.split(" ");
    const numeros = [];
    for (let i = 0; i < strings.length; i++) {
        numeros.push(parseInt(strings[i], 10));
    }
    solucao(numeros);
}