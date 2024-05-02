const { contas, saques } = require('../bancodedados')
const formataDataRegistro = require('../utilitarios/formataDataRegistro')

const sacarValorUsuarioControlador = (req, res) => {
    const { numero_conta, valor, senha } = req.body

    const conta = contas.find((conta) => {
        return conta.numero === Number(numero_conta)
    })

    conta.saldo -= Number(valor)

    const registroSaque = {
        data: formataDataRegistro(new Date()),
        numero_conta,
        valor
    }

    saques.push(registroSaque)

    return res.status(200).json()
}

module.exports = sacarValorUsuarioControlador