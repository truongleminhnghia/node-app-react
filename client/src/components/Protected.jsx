// src/components/Protected.jsx
import React, { useEffect, useState } from 'react';
import axios from 'axios';

const Protected = ({ token }) => {
    const [message, setMessage] = useState('');

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await axios.get('http://localhost:8080/api/auth/profile', {
                    headers: {
                        Authorization: `Bearer ${token}`,
                    },
                });
                setMessage(response.data.message);
            } catch (error) {
                console.error('Error fetching protected data', error);
                setMessage('Access denied');
            }
        };

        fetchData();
    }, [token]);

    return <div>{message}</div>;
};

export default Protected;
