function solucao(numeros) {
    const soma = numeros.reduce((total, numero) => total + numero, 0)
    let resto = soma % numeros.length
    if (resto === 0) {
        return console.log(numeros.length)
    } else {
        return console.log(resto)
    }

}