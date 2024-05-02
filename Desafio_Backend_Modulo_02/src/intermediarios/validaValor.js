
const validaValor = (req, res, next) => {
    const { valor } = req.body

    if (valor <= 0) {
        return res.status(400).json({ mensagem: 'Valor Invalido' })
    }
    return next()
}

module.exports = validaValor