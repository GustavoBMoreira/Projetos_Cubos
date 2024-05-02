const { contas, transferencias } = require("../bancodedados");
const formataDataRegistro = require("../utilitarios/formataDataRegistro");

const transferirValorControlador = (req, res) => {
    const { numero_conta_origem, numero_conta_destino, valor, senha } = req.body

    const contaOrigem = contas.find((conta) => {
        return conta.numero === Number(numero_conta_origem)
    })

    contaOrigem.saldo -= Number(valor)

    const contaDestino = contas.find((conta) => {
        return conta.numero === Number(numero_conta_destino)
    })

    contaDestino.saldo += Number(valor)


    const registroTransferencia = {
        data: formataDataRegistro(new Date()),
        numero_conta_origem,
        numero_conta_destino,
        valor
    }
    transferencias.push(registroTransferencia)

    return res.status(200).json()
}

module.exports = transferirValorControlador