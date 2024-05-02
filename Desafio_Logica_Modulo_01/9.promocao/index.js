function solucao(precos) {
    let soma = precos.reduce((total, valor) => total + valor, 0)
    if (precos.length >= 3) {
        let menorValor = Math.min(...precos)
        let desconto = menorValor * 0.50
        let valorComDesconto = soma - desconto
        console.log(valorComDesconto)
    } else {
        return console.log(soma)
    }

}