const { contas } = require("../bancodedados");

const verificarSaldoControlador = (req, res) => {
    const { numero_conta } = req.query

    const numeroConta = contas.find((conta) => {
        return conta.numero == numero_conta
    })

    return res.status(200).json({ saldo: numeroConta.saldo })

}

module.exports = verificarSaldoControlador