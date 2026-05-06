const mongoose = require('mongoose');
const connectDB = async () => {
    try {
        await mongoose.connect("mongodb+srv://sabrikawtar17_db_user:yZf2RXmGejNSKaJY@cluster0.vq2dtaw.mongodb.net/?appName=Cluster0");
        console.log('MongoDB connected');
    } catch (error) {
        console.error('MongoDB connection error:', error);
        process.exit(1);
    }
};
module.exports = connectDB;
