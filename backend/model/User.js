const mongoose = require("mongoose");
const { Schema } = mongoose;

// Define the User schema
const UserSchema = new Schema({
  name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,  // Mongoose will automatically create a unique index
  },
  password: {
    type: String,
    required: true,
  },
  date: {
    type: Date,
    default: Date.now,
  },
});

// Create the User model
const User = mongoose.model("User", UserSchema);

// Export the User model
module.exports = User;
