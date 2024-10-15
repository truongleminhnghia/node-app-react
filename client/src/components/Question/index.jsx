import Layout from "../Layouts/Layout1";
import React, { useState, useEffect } from "react";
import Table from "react-bootstrap/Table";
import { Link } from "react-router-dom";
import { Button } from "react-bootstrap"; // Import Button from React Bootstrap
import {
  getQuestion,
  deleteQuestion,
  createQuestion,
} from "../../services/question.service";

const QuestionPage = () => {
  const [questions, setQuestions] = useState([]);

  useEffect(() => {
    const fetchQuestions = async () => {
      try {
        const data = await getQuestion(); // Fetch data from API
        console.log("Fetched Questions:", data);
        if (data && Array.isArray(data)) {
          setQuestions(data); // Set state with fetched data
        } else {
          console.error("Invalid data format received: ", data);
          setQuestions([]); // Set empty array if data is invalid
        }
      } catch (error) {
        console.error("Error fetching questions:", error);
        setQuestions([]); // Set empty array in case of error
      }
    };

    fetchQuestions();
  }, []);

  const handleDelete = async (id) => {
    if (window.confirm("Are you sure you want to delete this question?")) {
      try {
        await deleteQuestion(id);
        setQuestions(questions.filter((question) => question._id !== id))
        alert("Question deleted successfully!");
        fetchQuestions(); 
      } catch (error) {
        console.error("Error deleting question:", error);
      }
    }
  };

  return (
    <Layout>
      <div className="container mx-auto mt-20">
        <div className="mb-4">
          <Link to={"/question/create"}>
            <Button
              variant="primary"
              className="p-2 rounded-md bg-blue-500 hover:bg-blue-700 text-white"
            >
              Add new question
            </Button>
          </Link>
        </div>
        <Table striped bordered hover className="w-full">
          <thead>
            <tr>
              <th className="text-center">STT</th>
              <th className="text-center">Question</th>
              <th className="text-center">Actions</th>
            </tr>
          </thead>
          <tbody>
            {questions.length > 0 ? (
              questions.map((question, index) => (
                <tr key={question._id}>
                  <td className="text-center">{index + 1}</td>
                  <td className="text-center">{question.text}</td>
                  <td className="text-center flex justify-center space-x-2">
                    <Link to={`/question/${question._id}`}>
                      <Button
                        variant="info"
                        className="p-2 rounded-md bg-blue-500 hover:bg-blue-700 text-white"
                      >
                        View Detail
                      </Button>
                    </Link>
                    <Button
                      variant="danger"
                      className="p-2 rounded-md bg-red-500 hover:bg-red-700 text-white"
                      onClick={() => handleDelete(question._id)}
                    >
                      Delete
                    </Button>
                  </td>
                </tr>
              ))
            ) : (
              <tr>
                <td colSpan="3" className="text-center">
                  No questions available.
                </td>
              </tr>
            )}
          </tbody>
        </Table>
      </div>
    </Layout>
  );
};

export default QuestionPage;
