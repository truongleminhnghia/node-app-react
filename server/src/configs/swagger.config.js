// src/configs/swagger.config.js
const swaggerJsDoc = require('swagger-jsdoc');

// Cấu hình Swagger
const swaggerOptions = {
    definition: {
        openapi: '3.0.0', // Phiên bản OpenAPI
        info: {
            title: 'API Documentation', // Tiêu đề tài liệu
            version: '1.0.0', // Phiên bản API
            description: 'API documentation for my Node.js application',
        },
    },
    apis: ['./src/routes/*.js'], // Đường dẫn tới các file chứa định nghĩa API
};

const swaggerSpecs = swaggerJsDoc(swaggerOptions);

module.exports = swaggerSpecs; // Xuất cấu hình Swagger
