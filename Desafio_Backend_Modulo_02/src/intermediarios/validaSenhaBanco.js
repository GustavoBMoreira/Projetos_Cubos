const { banco, contas } = require('../bancodedados')

const validaSenhaBanco = (req, res, next) => {
    const { senha_banco } = req.query
    const { numero_conta, numero_conta_origem, senha } = req.body

    if (senha_banco) {
        if (banco.senha !== senha_banco) {
            return res.status(401).json({ mensagem: 'A senha do banco informada é inválida!' })
        }
    }

    if (numero_conta && senha) {
        const senhaSaque = contas.find((usuario) => {
            return usuario.numero === Number(numero_conta)
        })

        if (senhaSaque.usuario.senha !== senha) {
            return res.status(401).json({ mensagem: 'A senha da conta informada é inválida!' })
        }
    }

    if (numero_conta_origem && senha) {
        const contaOrigem = contas.find((usuario) => {
            return usuario.numero === Number(numero_conta_origem)
        })

        if (contaOrigem.usuario.senha !== senha) {
            return res.status(401).json({ mensagem: 'A senha da conta informada é inválida!' })
        }
    }

    next()
}

module.exports = validaSenhaBanco