const express = require('express')
const listarContasControlador = require('./controladores/listarContas.controlador')
const criarContaControlador = require('./controladores/criarConta.controlador')
const atualizarContasControlador = require('./controladores/atualizarContas.controlador')
const excluirContaControlador = require('./controladores/excluirConta.controlador')
const depositarSaldoControlador = require('./controladores/depositarSaldo.controlador')

const { validaCpf, validaEmail, validaSenhaBanco, validaCamposConta,
    validaContaExiste, validaCamposDeposito, validaSaldoUsuario,
    validaValor, validaCamposSaque, validaCamposTransferencia, validaCamposSaldoExtrato } = require('./intermediarios/index')
const sacarValorUsuarioControlador = require('./controladores/sacarValorUsuario.controlador')
const transferirValorControlador = require('./controladores/transferirValor.controlador')
const verificarSaldoControlador = require('./controladores/verificarSaldo.controlador')
const verificarExtratoControlador = require('./controladores/verificarExtrato.controlador')
const rotas = express()

rotas.get('/contas', validaSenhaBanco, listarContasControlador)
rotas.post('/contas', validaCamposConta, validaCpf, validaEmail, criarContaControlador)
rotas.put('/contas/:numeroConta/usuario', validaCamposConta, validaContaExiste, validaCpf, validaEmail, atualizarContasControlador)
rotas.delete('/contas/:numeroConta', validaContaExiste, excluirContaControlador)
rotas.post('/transacoes/depositar', validaCamposDeposito, validaContaExiste, validaValor, depositarSaldoControlador)
rotas.post('/transacoes/sacar', validaCamposSaque, validaContaExiste, validaSenhaBanco, validaSaldoUsuario, validaValor, sacarValorUsuarioControlador)
rotas.post('/transacoes/transferir', validaCamposTransferencia, validaContaExiste, validaSenhaBanco, validaValor, validaSaldoUsuario, transferirValorControlador)
rotas.get('/contas/saldo', validaCamposSaldoExtrato, verificarSaldoControlador)
rotas.get('/contas/extrato', validaCamposSaldoExtrato, validaContaExiste, validaSenhaBanco, verificarExtratoControlador)

module.exports = rotas