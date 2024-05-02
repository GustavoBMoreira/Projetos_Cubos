const { contas } = require('../bancodedados')

const validaContaExiste = (req, res, next) => {
    const { numeroConta } = req.params
    const { numero_conta, numero_conta_origem, numero_conta_destino } = req.body

    if (numeroConta) {
        const contaExiste = contas.find((usuario) => {
            return usuario.numero === Number(numeroConta)
        })

        if (!contaExiste) {
            return res.status(404).json({ mensagem: 'Conta não encontrada' })
        }
    }

    if (numero_conta) {
        const contaExiste = contas.find((usuario) => {
            return usuario.numero === Number(numero_conta)
        })

        if (!contaExiste) {
            return res.status(404).json({ mensagem: 'Conta não encontrada' })
        }
    }

    if (numero_conta_origem || numero_conta_destino) {
        const contaOrigem = contas.find((usuario) => {
            return usuario.numero === Number(numero_conta_origem)
        })

        const contaDestino = contas.find((usuario) => {
            return usuario.numero === Number(numero_conta_destino)
        })

        if (!contaOrigem || !contaDestino) {
            return res.status(404).json({ mensagem: 'Conta não encontrada' })
        }
    }

    next()
}

module.exports = validaContaExiste