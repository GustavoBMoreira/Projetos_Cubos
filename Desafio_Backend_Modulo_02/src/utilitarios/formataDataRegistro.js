const formataDataRegistro = (data) => {
    const dataFormatada = data
        .toISOString().replace('T', ' ')
        .slice(0, -5)

    return dataFormatada
}

module.exports = formataDataRegistro