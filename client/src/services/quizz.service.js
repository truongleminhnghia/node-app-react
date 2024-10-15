import { get, post, put, deleteRequest } from "../api";

const API_GET = "/quizzs";
const API_POST = '/quizzs/create';

export const getAllQuizzes = async () => {
  return await get(API_GET);
};

export const getQuizDetail  = async (id) => {
  return await get(`${API_GET}/${id}`);
};

export const deleteQuiz  = async (id) => {
  return await deleteRequest(`${API_GET}/${id}`);
};

export const createQuiz  = async (question) => {
  return await post(API_POST, question);
};

export const updateQuiz  = async (id, question) => {
  return await put(`${API_GET}/${id}`, question);
};
