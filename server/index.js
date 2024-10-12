const express = require('express')
const dotenv = require('dotenv').config()
const mongoose = require('mongoose')
const cors = require('cors')
const connectDB = require('./src/configs/database.config')
const app = express()
const productRoute = require('./src/routes/product.route')
const authRouter = require('./src/routes/auth.route')
const swaggerUi = require('swagger-ui-express'); 
const swaggerSpecs = require('./src/configs/swagger.config'); // Nhập cấu hình Swagger
const PORT = process.env.PORT || 8000

app.use(cors());
app.use(express.json())
app.use(express.urlencoded({ extended: true}))

// Khai báo route cho Swagger UI
app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerSpecs));

//CONNECT_DATABASE
connectDB();
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
    console.log('Swagger UI available at http://localhost:8080/api-docs');
})

app.get('/', (req, res) => {
    res.send("Hello heheh");
});

app.use('/api/products', productRoute);
app.use('/api/auth', authRouter);