import axios from 'axios';

const API_URL = 'http://localhost:8080/api/auth'; // URL API của bạn

const loginUser = async (email, password) => {
    const response = await axios.post(`${API_URL}/login`, { email, password });
    return response.data; // Trả về dữ liệu nhận được từ server
};

export default {
    loginUser,
};