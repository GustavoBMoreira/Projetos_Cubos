const { contas } = require('../bancodedados')

const validaSaldoUsuario = (req, res, next) => {
    const { valor, numero_conta, numero_conta_origem } = req.body

    if (valor && numero_conta) {
        const conta = contas.find((conta) => {
            return conta.numero === Number(numero_conta)
        })


        if (valor > conta.saldo) {
            return res.status(201).json({ mensagem: 'Saldo Insuficiente!' })
        }
    }

    if (numero_conta_origem && valor) {

        const contaOrigem = contas.find((conta) => {
            return conta.numero === Number(numero_conta_origem)
        })


        if (valor > contaOrigem.saldo) {
            return res.status(201).json({ mensagem: 'Saldo Insuficiente!' })
        }
    }


    next()
}
module.exports = validaSaldoUsuario