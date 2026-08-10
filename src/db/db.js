const mongoose = require("mongoose");

async function connectDB() {
    await mongoose.connect("mongodb://localhost:27017/feed_proj");
    console.log("Database Connected .");
};

module.exports = connectDB;

