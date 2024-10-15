const express = require('express');
const router = express.Router();
const questionController = require('../controllers/question.controller')

router.post('/create', questionController.create)
router.get('/', questionController.getAll)
router.get('/:id', questionController.getById)
router.put('/:id', questionController.update)
router.delete('/:id', questionController.deleteQuestion)
router.get('/author/:authorId', questionController.getByAuthor)


module.exports = router;