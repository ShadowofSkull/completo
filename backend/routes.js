const express = require('express')

const {
  getTodos, 
  getTodo, 
  createTodo, 
  deleteTodo, 
  updateTodo
} = require('./controller')

const router = express.Router()

// GET all workouts
router.get('/', getTodos)

// GET a single workout
router.get('/:id', getTodo)

// POST a new workout
router.post('/', createTodo)

// DELETE a workout
router.delete('/:id', deleteTodo)

// UPDATE a workout
router.patch('/:id', updateTodo)

module.exports = router