import Layout from "../Layouts/Layout1";
import React, { useEffect, useState } from "react";
import { getAllQuizzes, deleteQuiz } from "../../services/quizz.service"; // Import dịch vụ để lấy quiz
import { Link } from "react-router-dom";
import { Button } from "react-bootstrap";

const QuizzPage = () => {
  const [quizzes, setQuizzes] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchQuizzes = async () => {
      try {
        const data = await getAllQuizzes();
        setQuizzes(data);
      } catch (error) {
        console.error("Error fetching quizzes:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchQuizzes();
  }, []);

  const handleDelete = async (id) => {
    if (window.confirm("Are you sure you want to delete this quiz?")) {
      try {
        await deleteQuiz(id); // Gọi hàm xóa quiz
        setQuizzes(quizzes.filter((quiz) => quiz._id !== id)); // Cập nhật danh sách quiz sau khi xóa
        alert("Quiz deleted successfully!");
      } catch (error) {
        console.error("Error deleting quiz:", error);
      }
    }
  };

  if (loading) return <div>Loading...</div>;
  if (quizzes.length === 0) return <div>No quizzes found.</div>;

  return (
    <Layout>
      <div className="container mx-auto mt-20 p-6 bg-white rounded shadow-md">
        <Link to={"/quizz/add"}>
          <Button
            variant="primary"
            className="p-2 rounded-md bg-blue-500 hover:bg-blue-700 text-white"
          >
            Add new question
          </Button>
        </Link>

        <h2 className="text-center mb-4 text-xl font-bold">All Quizzes</h2>
        <ul className="space-y-4">
          {quizzes.map((quiz) => (
            <li key={quiz._id} className="p-4 border rounded shadow">
              <h3 className="text-lg font-semibold">{quiz.title}</h3>
              <p>{quiz.description}</p>
              <Link
                to={`/quizz/${quiz._id}`} // Đường dẫn đến trang chi tiết quiz
                className="text-blue-500 hover:underline"
              >
                View Details
              </Link>
              <Button
                variant="danger"
                onClick={() => handleDelete(quiz._id)} 
                className="p-2 ml-8 rounded-md bg-red-500 hover:bg-red-700 text-white"
              >
                Delete
              </Button>
            </li>
          ))}
        </ul>
      </div>
    </Layout>
  );
};

export default QuizzPage;
