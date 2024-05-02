function processData(input) {
    const [senhaCorreta, senhaDigitada] = input.split('\n')
    let indiceSenha = 0
    for (let i = 0; i < senhaDigitada.length; i++) {
        if (senhaDigitada[i] === senhaCorreta[indiceSenha]) {
            indiceSenha++
        }
        if (indiceSenha === senhaCorreta.length - 1) {
            return console.log('SIM')
        }
    }

    return console.log('NAO')
}