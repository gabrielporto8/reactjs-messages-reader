const express = require('express');
const ScrapController = require('./controllers/ScrapController');

const routes = express.Router();

routes.post('/home', ScrapController.store);

routes.get('/all', ScrapController.indexAll);

module.exports = routes;