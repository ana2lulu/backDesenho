/**************************************************************************
 * Autor: Ana Luiza
 * Data: 23/05
 * Versão: 1.0
 **************************************************************************/

const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const controllerPersonas = require('./controller_dublador.js/controller_personas.js');
const controllerDesenho = require('./controller_dublador.js/controller_desenho.js');
const controllerDubladores = require('./controller/controller_dublador');

const app = express();
const PORT = 3000;


app.use(cors());
app.use(bodyParser.json());
app.use(express.json());

app.get('/v2/Personagens/listarPersonagens', async (req, res) => {
    try {
        let dadosPersona = await controllerPersonagens.getListarPersonas(); // Corrigir o nome da função
        if (dadosPersona) {
            res.status(200).json(dadosPersona);
        } else {
            res.status(404).json({ message: 'Nenhum personagem encontrado' });
        }
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Internal server error' });
    }
});



app.get('/v2/desenho/listardesenhos', async (req, res) => {
    try {
        let dadosDesenho = await controllerDesenho.getListarDesenho();
        if (dadosDesenho) {
            res.status(200).json(dadosDesenho);
        } else {
            res.status(404).json({ message: 'Nenhum desenho encontrado' });
        }
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Internal server error' });
    }
});


app.delete('/v2/desenho/excluirDesenho/:id', async (req, res) => {
    try {
        let id = parseInt(req.params.id);
        let resultado = await controllerDesenho.excluirDesenho(id);
        res.status(resultado.status).json({ message: resultado.message });
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Internal server error' });
    }
});



app.get('/v2/dubladores/listarDubladores', async (req, res) => {
    try {
        let dadosDublador = await controllerDubladores.getListarDubladores();
        if (dadosDublador) {
            res.status(200).json(dadosDublador);
        } else {
            res.status(404).json({ message: 'Nenhum dublador encontrado' });
        }
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Internal server error' });
    }
});









// Start server
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
