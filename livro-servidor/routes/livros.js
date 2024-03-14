const express = require('express');
const router = express.Router();
const livroDao = require('../modelo/livro-dao');

// Rota para obter todos os livros
router.get('/', async (req, res) => {
    try {
        const livros = await livroDao.obterLivros();
        res.json(livros);
    } catch (error) {
        res.status(500).json({ mensagem: 'Erro ao obter os livros.' });
    }
});

// Rota para incluir um novo livro
router.post('/', async (req, res) => {
    const livro = req.body;
    try {
        await livroDao.incluir(livro);
        res.json({ mensagem: 'Livro incluído com sucesso.' });
    } catch (error) {
        res.status(500).json({ mensagem: 'Erro ao incluir o livro.' });
    }
});

// Rota para excluir um livro pelo código
router.delete('/:codigo', async (req, res) => {
    const codigo = req.params.codigo;
    try {
        await livroDao.excluir(codigo);
        res.json({ mensagem: 'Livro excluído com sucesso.' });
    } catch (error) {
        res.status(500).json({ mensagem: 'Erro ao excluir o livro.' });
    }
});

module.exports = router;
