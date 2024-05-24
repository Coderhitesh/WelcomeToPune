const express = require('express')
const { CreateService, GetAllServices, DeleteSingleService, singleService } = require('../controller/servicecontroller')
const Router = express.Router()

Router.post('/createService' , CreateService)
Router.get('/getAllService' , GetAllServices)
Router.delete('/singleServiceDelete/:id' , DeleteSingleService)
Router.get('/singleServicePage/:id' , singleService)

module.exports = Router