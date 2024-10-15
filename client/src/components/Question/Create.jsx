// src/pages/AddQuestion.jsx
import React, { useState } from "react";
import { createQuestion } from "../../services/question.service"; // Import hàm tạo câu hỏi từ dịch vụ
import Layout from "../Layouts/Layout1";
import { useNavigate } from "react-router-dom"; // Import useNavigate để điều hướng
import { Button, Form, Alert } from "react-bootstrap"; // Import Button, Form và Alert từ React Bootstrap

const AddQuestion = () => {
  const [questionText, setQuestionText] = useState("");
  const [options, setOptions] = useState([""]); // State để lưu trữ các tùy chọn
  const [correctAnswer, setCorrectAnswer] = useState("");
  const [error, setError] = useState(""); // State để lưu thông báo lỗi
  const navigate = useNavigate(); // Khởi tạo useNavigate để điều hướng

  const handleSubmit = async (e) => {
    e.preventDefault(); // Ngăn chặn reload trang

    // Tạo một đối tượng FormData để chứa dữ liệu
    const formData = new FormData();
    formData.append("text", questionText);
    
    // Gửi từng tùy chọn vào FormData
    options.forEach((option, index) => {
      formData.append(`options[${index}]`, option); // Gửi từng tùy chọn
    });

    formData.append("correctAnswer", correctAnswer);

    try {
      await createQuestion(formData); // Gọi hàm tạo câu hỏi từ dịch vụ
      navigate("/question"); // Điều hướng đến trang câu hỏi sau khi tạo thành công
    } catch (error) {
      console.error("Error creating question:", error);
      setError("Error creating question. Please try again."); // Thiết lập thông báo lỗi
    }
  };

  const handleOptionChange = (index, value) => {
    const newOptions = [...options];
    newOptions[index] = value; // Cập nhật tùy chọn tại vị trí index
    setOptions(newOptions);
  };

  const addOption = () => {
    setOptions([...options, ""]); // Thêm tùy chọn mới
  };

  return (
    <Layout>
      <div className="container mx-auto mt-20">
        <h2 className="text-center">Add New Question</h2>
        {error && <Alert variant="danger">{error}</Alert>} {/* Hiển thị thông báo lỗi nếu có */}
        <Form onSubmit={handleSubmit} className="flex flex-col space-y-4">
          <div>
            <label htmlFor="questionText" className="block mb-2">
              Question:
            </label>
            <input
              type="text"
              id="questionText"
              value={questionText}
              onChange={(e) => setQuestionText(e.target.value)}
              className="p-2 border rounded w-full"
              required
            />
          </div>

          <div>
            <label className="block mb-2">Options:</label>
            {options.map((option, index) => (
              <div key={index} className="flex mb-2">
                <input
                  type="text"
                  value={option}
                  onChange={(e) => handleOptionChange(index, e.target.value)}
                  className="p-2 border rounded w-full"
                  required
                />
              </div>
            ))}
            <Button
              type="button"
              className="mt-2 bg-green-500 text-white rounded"
              onClick={addOption} // Thêm tùy chọn mới khi nhấn nút
            >
              Add Option
            </Button>
          </div>

          <div>
            <label htmlFor="correctAnswer" className="block mb-2">
              Correct Answer:
            </label>
            <input
              type="text"
              id="correctAnswer"
              value={correctAnswer}
              onChange={(e) => setCorrectAnswer(e.target.value)}
              className="p-2 border rounded w-full"
              required
            />
          </div>

          <Button
            type="submit"
            className="p-2 bg-blue-500 text-white rounded hover:bg-blue-700"
          >
            Add Question
          </Button>
        </Form>
      </div>
    </Layout>
  );
};

export default AddQuestion;
