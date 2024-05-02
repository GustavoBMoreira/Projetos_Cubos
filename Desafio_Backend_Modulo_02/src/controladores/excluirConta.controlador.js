const { contas } = require('../bancodedados')

const excluirContaControlador = (req, res) => {
    const { numeroConta } = req.params

    const excluirConta = contas.find((usuario) => {
        return usuario.numero === Number(numeroConta)
    })

    if (excluirConta.saldo > 0) {
        return res.status(400).json({ mensagem: 'A conta só pode ser removida se o saldo for zero!' })
    }

    const indexConta = contas.findIndex((i) => {
        return i.numero === Number(numeroConta)
    })

    contas.splice(Number(indexConta), 1)

    return res.status(200).json()
}



module.exports = excluirContaControlador