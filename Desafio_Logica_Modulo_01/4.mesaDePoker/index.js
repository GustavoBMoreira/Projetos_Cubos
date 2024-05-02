function solucao(min, max, valores) {
    const determinar = valores.filter((valor) => valor >= min && valor <= max)
    return console.log(determinar)

}