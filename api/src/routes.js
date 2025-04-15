const express = require('express');
const routes = express.Router();

const Aluno = require('./controllers/aluno');
const Empresta = require('./controllers/empresta');
const Livro = require('./controllers/livro');

routes.get('/', (req, res) => {
  return res.json({ titulo: 'Biblioteca ACME' });
});

routes.post('/aluno', Aluno.create);
routes.get('/aluno', Aluno.read);
routes.get('/aluno/:ra', Aluno.readOne);
routes.put('/aluno/:ra', Aluno.update);
routes.delete('/aluno/:ra', Aluno.remove);

routes.post('/empresta', Empresta.create);
routes.get('/empresta', Empresta.read);
routes.get('/empresta/:id', Empresta.readOne);
routes.put('/empresta/:id', Empresta.update);
routes.delete('/empresta/:id', Empresta.remove);

routes.post('/livro', Livro.create);
routes.get('/livro', Livro.read);
routes.get('/livro/:id', Livro.readOne);
routes.put('/livro/:id', Livro.update);
routes.delete('/livro/:id', Livro.remove);

module.exports = routes;