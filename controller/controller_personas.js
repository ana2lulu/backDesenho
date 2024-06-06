/*
autor: ana Luiza
data: 23.05.24
versão; 1.0
*/

const personaDao = require('../model/DAO/personagem.js')


// Listar os personagems


const getListarPersonas = async function() {
    let personaJSON = {};
    let dadosPersona = await personaDao.selectAllPersonas(); // Certifique-se de que o nome da função está correto

    if (dadosPersona) {
        personaJSON.persona = dadosPersona;
        personaJSON.quantidade = dadosPersona.length;
        personaJSON.status_code = 200;
        return personaJSON;
    } else {
        return false;
    }
};


const personagemDao = require('../model/DAO/personagem.js');

// Excluir um personagem por ID
const excluirPersonagem = async function(id) {
    let resultado = await personagemDao.deletePersonagemById(id);

    if (resultado) {
        return { status: 200, message: 'Personagem excluído com sucesso' };
    } else {
        return { status: 404, message: 'Personagem não encontrado' };
    }
};



module.exports = {
    getListarPersonas,
    excluirPersonagem
};
