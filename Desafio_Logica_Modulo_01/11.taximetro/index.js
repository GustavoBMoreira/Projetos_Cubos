function solucao(min, km) {
    let preco = 0
    if (min > 20) {
        preco = ((min - 20) * 30) + (20 * 50)
    } else {
        preco = min * 50
    }
    if (km > 10) {
        preco += ((km - 10) * 50) + (10 * 70)
    } else {
        preco += km * 70
    }
    console.log(preco)
}