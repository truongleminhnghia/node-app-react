// src/pages/QuizDetail.jsx
import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { getQuizDetail, updateQuiz } from "../../services/quizz.service"; // Import dịch vụ
import Layout from "../Layouts/Layout1";

const QuizDetail = () => {
  const { id } = useParams();
  const [quiz, setQuiz] = useState(null);
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchQuiz = async () => {
      try {
        const data = await getQuizDetail(id);
        setQuiz(data);
      } catch (error) {
        console.error("Error fetching quiz details:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchQuiz();
  }, [id]);

  const handleUpdate = async (e) => {
    e.preventDefault();
    try {
      await updateQuiz(id, quiz); // Cập nhật quiz
      alert("Quiz updated successfully!");
      navigate("/quizz"); // Điều hướng về trang quizzes
    } catch (error) {
      console.error("Error updating quiz:", error);
    }
  };

  if (loading) return <div>Loading...</div>;
  if (!quiz) return <div>No quiz found.</div>;

  return (
    <Layout>
      <div className="container mx-auto mt-20 p-6 bg-white rounded shadow-md">
        <h2 className="text-center mb-4 text-xl font-bold">Quiz Detail</h2>
        <form onSubmit={handleUpdate} className="mb-6">
          <div className="mb-4">
            <label htmlFor="title" className="block text-gray-700">
              Title:
            </label>
            <input
              type="text"
              id="title"
              value={quiz.title}
              onChange={(e) => setQuiz({ ...quiz, title: e.target.value })}
              className="mt-1 block w-full p-2 border rounded"
              required
            />
          </div>
          <div className="mb-4">
            <label htmlFor="description" className="block text-gray-700">
              Description:
            </label>
            <textarea
              id="description"
              value={quiz.description}
              onChange={(e) =>
                setQuiz({ ...quiz, description: e.target.value })
              }
              className="mt-1 block w-full p-2 border rounded"
              required
            />
          </div>
          <button
            type="submit"
            className="mt-4 p-2 bg-blue-500 text-white rounded"
          >
            Update Quiz
          </button>
        </form>

        <h3 className="text-lg font-bold">Questions:</h3>
        {quiz.questions && quiz.questions.length > 0 ? (
          <ul className="list-disc list-inside">
            {quiz.questions.map((question) => (
              <li key={question._id} className="mb-2">
                <strong>Question:</strong> {question.text} <br />
                <strong>Corect Answer:</strong> {question.correctAnswer}
              </li>
            ))}
          </ul>
        ) : (
          <p>No questions available for this quiz.</p>
        )}
      </div>
    </Layout>
  );
};

export default QuizDetail;
