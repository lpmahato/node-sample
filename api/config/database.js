const mongoose = require('mongoose');
const uri = process.env.MONGO_URI;

const connectDB = async () => {
    try {
        mongoose.set('strictQuery', true);
        await mongoose.connect(uri);
    } catch (err) {
        console.error(err);
    }
};

module.exports = connectDB;
