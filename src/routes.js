const express = require('express');

const ContatoController = require('./controllers/ContatoController');

const routes = express.Router();

routes.get('/:id', ContatoController.getContato);
routes.put('/:id', ContatoController.alterContato);
routes.delete('/:id', ContatoController.deleteContato);

routes.get('/', ContatoController.index);
routes.post('/', ContatoController.create);

module.exports = routes;