// Import Swagger documentation
const express = require('express')
const router = express.Router()
const controller = require(`../controllers/users.controller`)

/* Enable if you want to validate */
// const validate = require('express-validation')
// const Validation = require('./documentation/albumApi')

/* ********* */
/* ME */
router.get('/me', controller.authorize, controller.showMe)

/* List todos. */
router.get('/me/todos',controller.authorize, controller.listTodos)

/* Add todo. */
router.post('/me/todos',controller.authorize, controller.createTodo)

/* Edit todo. */
router.put('/me/todos/:todoId',controller.authorize, controller.editTodo)

/* Delete todo. */
router.delete('/me/todos/:todoId',controller.authorize, controller.deleteTodo)

/* Create an user with id. */
router.post('/register/:id', controller.register)
/* ********* */

// /* Show an user. */
// router.get('/:id', controller.show)


// /* List todos. */
// router.get('/:id/todos', controller.listTodos)

// /* Add todo. */
// router.post('/:id/todos', controller.createTodo)

// /* Edit todo. */
// router.put('/:id/todos/:todoId', controller.editTodo)

// /* Delete todo. */
// router.delete('/:id/todos/:todoId', controller.deleteTodo)



/* Update an user. */
// router.put('/:id', controller.update)

module.exports = router
