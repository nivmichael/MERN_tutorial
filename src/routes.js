const express = require('express');
const multer = require('multer');


const UserController = require('./controllers/UserController');
const EventController = require('./controllers/EventController');
const DashboardController = require('./controllers/DashboardController');
const LoginController = require('./controllers/LoginController');
const uploadConfig = require('./config/upload');

const routes = express.Router();
const upload = multer(uploadConfig);

routes.get('/status', (req, res) => { 
    res.send({status: 200 });
})
// TODO LoginController
// TODO SubscribeController
// TODO ApprovalController
// TODO RejectionController

// Login
routes.post('/login', LoginController.store)

// Dashboard
routes.get('/dashboard', DashboardController.GetAllEvents)
routes.get('/dashboard/:sport', DashboardController.GetAllEvents)
routes.get('/dashboard/:eventId', DashboardController.GetEventById)

// Event

routes.post('/event', upload.single("thumbnail"), EventController.createEvent)
routes.delete('/event/:eventId', EventController.delete)

// User
routes.post('/user/register', UserController.createUser) 
routes.get('/user/:userId', UserController.GetUserById)

module.exports = routes;