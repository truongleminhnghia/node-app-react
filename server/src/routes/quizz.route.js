const express = require('express');
const {
  createQuiz,
  getAllQuizzes,
  getQuizById,
  updateQuiz,
  deleteQuiz,
} = require('../controllers/quizz.controller');

const router = express.Router();

router.post('/create', createQuiz); // Tạo quiz mới
router.get('/', getAllQuizzes); // Lấy tất cả quiz
router.get('/:id', getQuizById); // Lấy quiz theo ID
router.put('/:id', updateQuiz); // Cập nhật quiz
router.delete('/:id', deleteQuiz); // Xóa quiz

module.exports = router;
