function processData(input) {
    const verificarLetraInicial = input.slice(0, 1)
    if (verificarLetraInicial.toLowerCase() === verificarLetraInicial && input.slice(1).toUpperCase() === input.slice(1)) {
        return console.log(verificarLetraInicial.toUpperCase() + input.slice(1).toLowerCase())
    }
    if (input.toUpperCase() === input) {
        return console.log(input.toLowerCase())
    }
    return console.log(input)
}