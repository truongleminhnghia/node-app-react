const mogoose = require('mongoose')

mogoose.set('strictQuery', false)

const connectDB = async() => {
    try {
        const conn = await mogoose.connect(process.env.DATABSE_URL);
        console.log(`Database Connected: ${conn.connection.host}`);
    } catch(error) {
        console.log(error);
    }
};

module.exports = connectDB;