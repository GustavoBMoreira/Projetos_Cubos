const { contas } = require('../bancodedados')

const validaCamposConta = (req, res, next) => {
    const { nome, cpf, data_nascimento, telefone, email, senha } = req.body

    if (!nome.trim() || !cpf.trim() || !data_nascimento.trim() || !telefone.trim() || !email.trim() || !senha.trim()) {
        return res.status(400).json({ mensagem: "Todos os Campos são Obrigatorios" })
    }

    next()
}
module.exports = validaCamposConta