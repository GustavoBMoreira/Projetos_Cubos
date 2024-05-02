function solucao(carta) {
    const manilhas = {
        'Q': 'J', 'J': 'K', 'K': 'A', 'A': '2', '2': '3', '3': 'Q'
    }
    const manilha = manilhas[carta]
    return console.log(manilha)
}