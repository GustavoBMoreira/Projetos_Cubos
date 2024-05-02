const { contas, depositos } = require('../bancodedados')
const formataDataRegistro = require('../utilitarios/formataDataRegistro')

const depositarSaldoControlador = (req, res) => {
    const { numero_conta, valor } = req.body

    const indexConta = contas.findIndex((conta) => {
        return conta.numero === Number(numero_conta)
    })

    contas[indexConta].saldo += Number(valor)

    const registroDeposito = {
        data: formataDataRegistro(new Date()),
        numero_conta,
        valor
    }
    depositos.push(registroDeposito)

    return res.status(200).json()

}


module.exports = depositarSaldoControlador