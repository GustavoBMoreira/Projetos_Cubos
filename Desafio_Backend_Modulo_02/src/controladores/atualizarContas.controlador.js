const { contas } = require('../bancodedados')

const atualizarContasControlador = (req, res) => {
    const { numeroConta } = req.params
    const { nome, cpf, data_nascimento, telefone, email, senha } = req.body

    const conta = contas.find((usuario) => {
        return usuario.numero === Number(numeroConta)
    })

    conta.usuario.nome = nome
    conta.usuario.cpf = cpf
    conta.usuario.data_nascimento = data_nascimento
    conta.usuario.telefone = telefone
    conta.usuario.email = email
    conta.usuario.senha = senha

    return res.status(200).send(conta)
}

module.exports = atualizarContasControlador