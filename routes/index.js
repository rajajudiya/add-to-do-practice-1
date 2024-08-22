const express = require('express');
const router = express.Router();
const controller = require('../controllers/controller');

router.get('/', controller.defaultController);
router.post('/todoApp', controller.todoApp);
router.get('/editTodoController/:id', controller.editTodoController);
router.post('/updateTodo/:id', controller.updateTodo);
// router.get('/deleteTodo/:id', controller.deleteTodo);

module.exports = router; 