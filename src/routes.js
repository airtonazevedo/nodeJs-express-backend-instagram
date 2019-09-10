const express = require('express');
const routes = new express.Router();
const multer = require('multer');
const PostController = require('./controllers/PostController')
const uploadConfig = require('./config/upload');
const upload = multer(uploadConfig);
const LikeController = require('./controllers/LikeController')

routes.get('/', (req, res) => {
    //http://localhost:3333/?name=airto
    //return res.send('Ola ' + req.query.name);
    return res.send(`top nao ${req.query.name}`);
})

routes.get('/posts', PostController.index);
routes.post('/posts', upload.single('image') ,PostController.store);

routes.post('/posts/:id/like', LikeController.store)
module.exports = routes;