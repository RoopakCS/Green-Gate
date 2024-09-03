import mongoose from 'mongoose';

// Define the schema
const userSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
  },
  mobile: {
    type: String,
    required: true,
  },
  password: {
    type: String,
    required: true,
  }
});

// Register the model with mongoose
const UserInfo = mongoose.model('UserInfo', userSchema);

// Export the model
export default UserInfo;
