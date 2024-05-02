const { contas } = require('../bancodedados')

const validaCamposSaldoExtrato = (req, res, next) => {
    const { numero_conta, senha } = req.query

    const numeroConta = contas.find((conta) => {
        return conta.numero == numero_conta
    })

    if (!numeroConta) {
        return res.status(404).json({ mensagem: 'Conta não encontrada' })
    }

    if (numeroConta.usuario.senha !== senha) {
        return res.status(401).json({ mensagem: 'A senha do banco informada é inválida!' })
    }

    next()
}

module.exports = validaCamposSaldoExtrato