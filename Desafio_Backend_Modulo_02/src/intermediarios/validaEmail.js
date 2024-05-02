const { contas } = require('../bancodedados')

const validaEmail = (req, res, next) => {
    const { email } = req.body
    const emailExiste = contas.find((conta) => {
        return conta.usuario.email === email
    })

    if (emailExiste) {
        return res.status(401).json({ mensagem: "Já existe uma conta com o cpf ou e-mail informado!" })
    }

    next()
}
module.exports = validaEmail