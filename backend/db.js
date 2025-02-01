const mongoose = require('mongoose');

const mongoURI = "mongodb://127.0.0.1:27017/?directConnection=true&serverSelectionTimeoutMS=20000&appName=mongosh+2.2.10"; // Increased timeout to 20 seconds

async function connectToMongo() {
  try {
    await mongoose.connect(mongoURI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      serverSelectionTimeoutMS: 20000, // Timeout after 20 seconds
    });
    console.log("Connected to Mongo Successfully");
  } catch (err) {
    console.log("Error connecting to Mongo:", err);
  }
}

module.exports = connectToMongo;
