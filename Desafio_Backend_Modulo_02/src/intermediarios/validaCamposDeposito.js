const { contas } = require('../bancodedados')

const validaCamposDeposito = (req, res, next) => {
    const { numero_conta, valor } = req.body

    if (!numero_conta && !valor) {
        return res.status(400).json({ mensagem: "O número da conta e o valor são obrigatórios!" })
    }
    next()
}

module.exports = validaCamposDeposito