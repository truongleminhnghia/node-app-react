const mongoose = require("mongoose");

const questionSchema = new mongoose.Schema(
  {
    text: { type: String, required: true },
    options: [{ type: String, required: true }],
    correctAnswer: { type: String, required: true },
    // author: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true }
  },

  {
    timestamps: true, // Automatically create createdAt and updatedAt fields
  }
);

module.exports = mongoose.model("Question", questionSchema);
