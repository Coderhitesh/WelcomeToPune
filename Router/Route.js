const express = require('express')
const { CreateService, GetAllServices, DeleteSingleService, singleService, deleteAllService } = require('../controller/servicecontroller')
const { createBlog, updateBlog, singleBlog, allBlogs, DeleteBlog } = require('../controller/blogController')
const Router = express.Router()

Router.post('/createService' , CreateService)
Router.get('/getAllService' , GetAllServices)
Router.delete('/singleServiceDelete/:id' , DeleteSingleService)
Router.get('/singleServicePage/:id' , singleService)
Router.delete('/deleteAllServer' , deleteAllService)
Router.post('/createBlogs', createBlog);
Router.put('/updateBlog',updateBlog)
Router.get('/singleBlog/:id',singleBlog)
Router.get('/allBlog',allBlogs)
Router.delete('/deleteBlog/:id',DeleteBlog)

module.exports = Router