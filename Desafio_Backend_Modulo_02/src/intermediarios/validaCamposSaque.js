
const validaCamposSaque = (req, res, next) => {
    const { numero_conta, valor, senha } = req.body

    if (!numero_conta.trim() || !valor.trim() || !senha.trim()) {
        return res.status(400).json({ mensagem: "Todos os campos são obrigatorios!" })
    }
    next()
}

module.exports = validaCamposSaque