const { contas } = require('../bancodedados')

const validaCpf = (req, res, next) => {
    const { cpf } = req.body
    const cpfExiste = contas.find((conta) => {
        return conta.usuario.cpf === cpf
    })

    if (cpfExiste) {
        return res.status(401).json({ mensagem: "Já existe uma conta com o cpf ou e-mail informado!" })
    }

    next()
}
module.exports = validaCpf