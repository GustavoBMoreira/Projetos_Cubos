const { contas } = require('../bancodedados')
let identificador = 0

const criarContaControlador = (req, res) => {
    const { nome, cpf, data_nascimento, telefone, email, senha } = req.body
    const novaConta = {
        numero: ++identificador,
        saldo: 0,
        usuario: {
            nome,
            cpf,
            data_nascimento,
            telefone,
            email,
            senha
        }
    }
    contas.push(novaConta)
    return res.status(201).json()
}

module.exports = criarContaControlador