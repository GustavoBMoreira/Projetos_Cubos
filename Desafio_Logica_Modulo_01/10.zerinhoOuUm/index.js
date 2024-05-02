function solucao(jogadores) {
    const jogadaZero = jogadores.filter((jogadorZero) => jogadorZero.jogada === 0)
    const jogadaUm = jogadores.filter(jogadorUm => jogadorUm.jogada === 1)
    if (jogadaUm.length === 1) {
        return console.log(jogadaUm[0].nome)
    }
    if (jogadaZero.length === 1) {
        return console.log(jogadaZero[0].nome)
    }
    return console.log('NINGUEM')

}