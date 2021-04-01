const express = require('express');
const route = express.Router();

const services = require('../services/render');
const controller = require('../controller/UserController');
/**
 * @description Root route
 * @method GET / 
 */
route.get('/', services.homeRoutes);

/**
 * @description add route
 * @method GET /addUser
 */
route.get('/add-user',services.addUser);

/**
 * @description update route
 * @method GET /updateUser
 */
route.get('/update-user', services.updateUser);

//API
route.post('/api/users',controller.create);
route.get('/api/users',controller.find);
route.put('/api/users/:id',controller.update);
route.delete('/api/users/:id',controller.delete);

module.exports = route; // to export route in file server.js