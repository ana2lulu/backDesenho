const dubladorDao = require('../model/DAO/dublador.js');

// Listar os dubladores
   
    const getListarDubladores = async function() {
    let dubladorJSON = {};
    let dadosDublador = await dubladorDao.selectAllDubladores();

    if (dadosDublador) {
        dubladorJSON.dubladores = dadosDublador;
        dubladorJSON.quantidade = dadosDublador.length;
        dubladorJSON.status_code = 200;
        return dubladorJSON;
    } else {
        return false;
    }
};

// Excluir um dublador por ID
const excluirDublador = async function(id) {
    let resultado = await dubladorDao.deleteDubladorById(id);

    if (resultado) {
        return { status: 200, message: 'Dublador excluído com sucesso' };
    } else {
        return { status: 404, message: 'Dublador não encontrado' };
  
  }
};

module.exports = {
    getListarDubladores,
    excluirDublador
};
