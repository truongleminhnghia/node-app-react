const mongoose = require("mongoose");

const quizSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: true,
    },
    description: {
      type: String,
      required: true,
    }, // Thêm trường description
    questions: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Question",
      },
    ], // Lưu trữ ID của các câu hỏi
  },
  {
    timestamps: true, // Automatically create createdAt and updatedAt fields
  }
);

module.exports = mongoose.model('Quizz', quizSchema);
