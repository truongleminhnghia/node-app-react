const QuizService = require('../services/quizz.service');

// Tạo một quiz mới
const createQuiz = async (req, res) => {
  try {
    const { title, description, questions } = req.body;
    const quiz = await QuizService.createQuiz(title, description, questions);
    res.status(201).json(quiz);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Lấy tất cả quiz
const getAllQuizzes = async (req, res) => {
  try {
    const quizzes = await QuizService.getAllQuizzes();
    res.status(200).json(quizzes);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Lấy quiz theo ID
const getQuizById = async (req, res) => {
  try {
    const { id } = req.params;
    const quiz = await QuizService.getQuizById(id);
    res.status(200).json(quiz);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Cập nhật quiz
const updateQuiz = async (req, res) => {
  try {
    const { id } = req.params;
    const updates = req.body;
    const updatedQuiz = await QuizService.updateQuiz(id, updates);
    res.status(200).json(updatedQuiz);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Xóa quiz
const deleteQuiz = async (req, res) => {
  try {
    const { id } = req.params;
    const deletedQuiz = await QuizService.deleteQuiz(id);
    res.status(200).json(deletedQuiz);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

module.exports = {
  createQuiz,
  getAllQuizzes,
  getQuizById,
  updateQuiz,
  deleteQuiz,
};
