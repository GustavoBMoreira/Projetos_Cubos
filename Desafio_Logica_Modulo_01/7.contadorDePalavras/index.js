function solucao(texto) {
    let palavras = texto.split(' ')
    while (palavras.includes('')) {
        palavras.splice(palavras.indexOf(''), 1)
    }
    console.log(palavras.length)
}