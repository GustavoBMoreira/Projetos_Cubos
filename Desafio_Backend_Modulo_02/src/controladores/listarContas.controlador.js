const { contas } = require('../bancodedados')

const listarContasControlador = (req, res) => {

    return res.status(200).json(contas)

}

module.exports = listarContasControlador