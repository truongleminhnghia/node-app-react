import { get, post, put, deleteRequest } from "../api";

const API_GET = "/questions";
const API_POST = '/questions/create';

export const getQuestion = async () => {
  return await get(API_GET);
};

export const getDetail = async (id) => {
  return await get(`${API_GET}/${id}`);
};

export const deleteQuestion = async (id) => {
  return await deleteRequest(`${API_GET}/${id}`);
};

export const createQuestion = async (question) => {
  return await post(API_POST, question);
};

export const updateQuestion = async (id, question) => {
  return await put(`${API_GET}/${id}`, question);
};
