function solucao(lista) {
    let idadeJovem = Infinity
    lista.map((numero) => {
        if (numero >= 18 && numero <= idadeJovem) {
            idadeJovem = numero
        }
    })
    if (idadeJovem === Infinity) {
        console.log('CRESCA E APARECA')
    } else {
        console.log(idadeJovem)
    }

}