const { contas } = require("../bancodedados");

const validaCamposTransferencia = (req, res, next) => {
    const { numero_conta_origem, numero_conta_destino, valor, senha } = req.body

    if (!numero_conta_origem || !numero_conta_destino || !valor || !senha) {
        return res.status(400).json({ mensagem: "Todos os Campos são Obrigatorios" })
    }

    next()
}
module.exports = validaCamposTransferencia