// src/pages/AddQuiz.jsx
import React, { useState } from "react";
import { createQuiz } from "../../services/quizz.service"; 
import { useNavigate } from "react-router-dom"; 
import Layout from "../Layouts/Layout1";

const AddQuiz = () => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [questions, setQuestions] = useState([{ text: "", options: [], correctAnswer: "" }]);
  const navigate = useNavigate(); 

  const handleSubmit = async (e) => {
    e.preventDefault(); 

    const quizData = { title, description, questions }; 

    try {
      await createQuiz(quizData); 
      alert("Quiz created successfully!");
      navigate("/quizz"); 
    } catch (error) {
      console.error("Error creating quiz:", error);
    }
  };

  const handleQuestionChange = (index, field, value) => {
    const newQuestions = [...questions];
    newQuestions[index][field] = value;
    setQuestions(newQuestions);
  };

  const addOption = (index) => {
    const newQuestions = [...questions];
    newQuestions[index].options.push(""); // Thêm một tùy chọn mới trống
    setQuestions(newQuestions);
  };

  const handleOptionChange = (questionIndex, optionIndex, value) => {
    const newQuestions = [...questions];
    newQuestions[questionIndex].options[optionIndex] = value; // Cập nhật tùy chọn
    setQuestions(newQuestions);
  };

  const addQuestion = () => {
    setQuestions([...questions, { text: "", options: [], correctAnswer: "" }]); // Thêm câu hỏi mới
  };

  return (
    <Layout>
      <div className="container mx-auto mt-20 p-6 bg-white rounded shadow-md">
        <h2 className="text-center mb-4 text-xl font-bold">Add New Quiz</h2>
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label htmlFor="title" className="block text-gray-700 font-semibold">
              Title:
            </label>
            <input
              type="text"
              id="title"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              required
              className="mt-1 block w-full p-2 border border-gray-300 rounded"
            />
          </div>
          <div className="mb-4">
            <label htmlFor="description" className="block text-gray-700 font-semibold">
              Description:
            </label>
            <textarea
              id="description"
              rows={3}
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              required
              className="mt-1 block w-full p-2 border border-gray-300 rounded"
            />
          </div>
          
          {/* Question Fields */}
          <h3 className="text-lg font-semibold mb-2">Questions</h3>
          {questions.map((question, questionIndex) => (
            <div key={questionIndex} className="mb-4 border p-4 rounded">
              <label className="block text-gray-700 font-semibold">Question {questionIndex + 1}:</label>
              <input
                type="text"
                value={question.text}
                onChange={(e) => handleQuestionChange(questionIndex, "text", e.target.value)}
                required
                className="mt-1 block w-full p-2 border border-gray-300 rounded"
              />
              <label className="block text-gray-700 font-semibold mt-2">Options:</label>
              {question.options.map((option, optionIndex) => (
                <div key={optionIndex} className="flex items-center mb-2">
                  <input
                    type="text"
                    value={option}
                    onChange={(e) => handleOptionChange(questionIndex, optionIndex, e.target.value)}
                    required
                    className="mt-1 block w-full p-2 border border-gray-300 rounded mr-2"
                  />
                </div>
              ))}
              <button type="button" onClick={() => addOption(questionIndex)} className="mt-2 p-2 bg-green-500 text-white rounded">
                Add Option
              </button>
              <label className="block text-gray-700 font-semibold mt-2">Correct Answer:</label>
              <input
                type="text"
                value={question.correctAnswer}
                onChange={(e) => handleQuestionChange(questionIndex, "correctAnswer", e.target.value)}
                required
                className="mt-1 block w-full p-2 border border-gray-300 rounded"
              />
            </div>
          ))}
          <button type="button" onClick={addQuestion} className="mt-2 p-2 bg-green-500 text-white rounded">
            Add Question
          </button>

          <button
            type="submit"
            className="mt-4 p-2 bg-blue-500 text-white rounded"
          >
            Create Quiz
          </button>
        </form>
      </div>
    </Layout>
  );
};

export default AddQuiz;
