const  Quiz  = require('../models/quizz.model'); // Đường dẫn đến file model
const Question = require('../models/question.model');
class QuizService {
  // Tạo một quiz mới
  static async createQuiz(title, description, questions) {
    try {
      // Tạo và lưu trữ các câu hỏi
      const questionIds = await Promise.all(
        questions.map(async (question) => {
          const newQuestion = new Question(question);
          const savedQuestion = await newQuestion.save();
          return savedQuestion._id;
        })
      );

      // Tạo quiz mới với các ID câu hỏi
      const quiz = new Quiz({
        title,
        description,
        questions: questionIds,
      });

      await quiz.save(); // Lưu quiz vào cơ sở dữ liệu
      return quiz; // Trả về quiz vừa tạo
    } catch (error) {
      throw new Error(error.message);
    }
  }

  // Lấy tất cả quiz
  static async getAllQuizzes() {
    try {
      return await Quiz.find().populate('questions'); // Lấy tất cả quiz và populate câu hỏi
    } catch (error) {
      throw new Error(error.message);
    }
  }

  // Lấy quiz theo ID
  static async getQuizById(quizId) {
    try {
      const quiz = await Quiz.findById(quizId).populate('questions');
      if (!quiz) {
        throw new Error('Quiz not found');
      }
      return quiz;
    } catch (error) {
      throw new Error(error.message);
    }
  }

  // Cập nhật quiz
  static async updateQuiz(quizId, updates) {
    try {
      const updatedQuiz = await Quiz.findByIdAndUpdate(quizId, updates, {
        new: true,
      }).populate('questions');
      if (!updatedQuiz) {
        throw new Error('Quiz not found');
      }
      return updatedQuiz;
    } catch (error) {
      throw new Error(error.message);
    }
  }

  // Xóa quiz
  static async deleteQuiz(quizId) {
    try {
      const deletedQuiz = await Quiz.findByIdAndDelete(quizId);
      if (!deletedQuiz) {
        throw new Error('Quiz not found');
      }
      return deletedQuiz;
    } catch (error) {
      throw new Error(error.message);
    }
  }
}

module.exports = QuizService;
