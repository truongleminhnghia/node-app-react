import Layout from "../Layouts/Layout1";
import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { Button, Form, Alert } from "react-bootstrap"; // Thêm Alert để hiển thị thông báo lỗi
import { getDetail, updateQuestion } from "../../services/question.service"; // Điều chỉnh import theo cấu trúc dịch vụ của bạn

const DetailPage = () => {
  const { id } = useParams(); // Lấy ID câu hỏi từ URL
  const [question, setQuestion] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(""); // State để lưu thông báo lỗi
  const navigate = useNavigate(); // Để điều hướng sau khi cập nhật

  useEffect(() => {
    const fetchQuestion = async () => {
      try {
        const data = await getDetail(id); // Lấy dữ liệu câu hỏi theo ID
        setQuestion(data);
      } catch (error) {
        console.error("Error fetching question details:", error);
        setError("Could not fetch question details. Please try again."); // Thiết lập thông báo lỗi
      } finally {
        setLoading(false);
      }
    };

    fetchQuestion();
  }, [id]);

  const handleUpdate = async (e) => {
    e.preventDefault();
    try {
      await updateQuestion(id, question); // Gửi yêu cầu cập nhật
      alert("Question updated successfully!");
      navigate('/question'); // Chuyển hướng đến trang câu hỏi sau khi cập nhật thành công
    } catch (error) {
      console.error("Error updating question:", error);
      setError("Error updating question. Please try again."); // Thiết lập thông báo lỗi
    }
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    if (name === "options") {
      setQuestion((prevQuestion) => ({
        ...prevQuestion,
        options: value.split(",").map((option) => option.trim()), // Cập nhật tùy chọn từ chuỗi
      }));
    } else {
      setQuestion((prevQuestion) => ({
        ...prevQuestion,
        [name]: value,
      }));
    }
  };

  if (loading) return <div>Loading...</div>;
  if (!question) return <div>No question found.</div>;

  return (
    <Layout>
      <div className="container mx-auto mt-20 p-6 bg-white rounded shadow-md">
        <h2 className="text-center mb-4 text-xl font-bold">Question Detail</h2>
        {error && <Alert variant="danger">{error}</Alert>} {/* Hiển thị thông báo lỗi nếu có */}
        <Form onSubmit={handleUpdate} className="space-y-4">
          <div>
            <label htmlFor="text" className="block text-gray-700 font-semibold">
              Question
            </label>
            <input
              type="text"
              id="text"
              name="text"
              value={question.text}
              onChange={handleInputChange}
              className="mt-1 block w-full p-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
              required
            />
          </div>
          <div>
            <label
              htmlFor="options"
              className="block text-gray-700 font-semibold"
            >
              Options (comma-separated)
            </label>
            <input
              type="text"
              id="options"
              name="options"
              value={question.options.join(", ")} // Hiển thị tùy chọn dưới dạng chuỗi ngăn cách bằng dấu phẩy
              onChange={handleInputChange}
              className="mt-1 block w-full p-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
              required
            />
          </div>
          <div>
            <label
              htmlFor="correctAnswer"
              className="block text-gray-700 font-semibold"
            >
              Correct Answer
            </label>
            <input
              type="text"
              id="correctAnswer"
              name="correctAnswer"
              value={question.correctAnswer}
              onChange={handleInputChange}
              className="mt-1 block w-full p-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
              required
            />
          </div>
          <Button
            type="submit"
            className="p-2 bg-blue-500 text-white rounded hover:bg-blue-700"
          >
            Update Question
          </Button>
        </Form>
      </div>
    </Layout>
  );
};

export default DetailPage;
