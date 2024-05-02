const { saques, depositos, transferencias } = require("../bancodedados")

const verificarExtratoControlador = (req, res) => {
    const { numero_conta } = req.query


    const saquesExtrato = saques.filter((valor) => {
        return Number(valor.numero_conta) === Number(numero_conta)
    })

    const depositosExtrato = depositos.filter((valor) => {
        return Number(valor.numero_conta) === Number(numero_conta)
    })

    const transferenciasRecebidasExtrato = transferencias.filter((valor) => {
        return Number(valor.numero_conta_destino) === Number(numero_conta)
    })

    const transferenciasEnviadasExtrato = transferencias.filter((valor) => {
        return Number(valor.numero_conta_origem) === Number(numero_conta)
    })



    res.status(200).json({
        depositos: depositosExtrato,
        saques: saquesExtrato,
        transferenciasEnviadasExtrato,
        transferenciasRecebidasExtrato
    })
}

module.exports = verificarExtratoControlador