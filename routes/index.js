const express = require('express');
const app = express();
app.use(express.json()); 

//IMPORT ROUTES
const publicRoutes = require('./public.routes'); 
const ownerRoutes = require('./owner.routes'); 
const userRoutes = require('./user.routes'); 

//CONFIGURE ROUTES
app.use(publicRoutes);
app.use(userRoutes);
app.use(ownerRoutes); 

module.exports = app; 