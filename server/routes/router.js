const express = require('express');
const route = express.Router();

const services = require('../services/render');

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

module.exports = route; // to export route in file server.js