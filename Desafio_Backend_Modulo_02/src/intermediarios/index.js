const validaCpf = require('../intermediarios/validaCpf')
const validaSenhaBanco = require('../intermediarios/validaSenhaBanco')
const validaEmail = require('../intermediarios/validaEmail')
const validaCamposConta = require('../intermediarios/validaCamposConta')
const validaContaExiste = require('../intermediarios/validaContaExiste')
const validaCamposDeposito = require('./validaCamposDeposito')
const validaSaldoUsuario = require('./validaSaldoUsuario')
const validaValor = require('./validaValor')
const validaCamposSaque = require('./validaCamposSaque')
const validaCamposTransferencia = require('./validaCamposTransferencia')
const validaCamposSaldoExtrato = require('./validaCamposSaldoExtrato')

module.exports = {
    validaCpf,
    validaEmail,
    validaSenhaBanco,
    validaCamposConta,
    validaContaExiste,
    validaCamposDeposito,
    validaSaldoUsuario,
    validaValor,
    validaCamposSaque,
    validaCamposTransferencia,
    validaCamposSaldoExtrato
}