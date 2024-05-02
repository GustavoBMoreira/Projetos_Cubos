function solucao(lista) {
    const soma = lista.reduce((total, numero) => total + numero, 0)
    return console.log(soma)

}


function processData(input) {
    const strings = input.split(" ");
    const numeros = [];
    for (let i = 0; i < strings.length; i++) {
        numeros.push(parseInt(strings[i], 10));
    }
    solucao(numeros);
} 