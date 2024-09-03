import express from 'express';
import mongoose from 'mongoose';
import UserInfo from './UserDetails.js'; // Correct import

const mongourl = "mongodb://localhost:27017/HarvestHub";
const app = express();

app.use(express.json()); // Middleware to parse JSON bodies

mongoose.connect(mongourl)
  .then(() => {
    console.log("Database Connected");
  })
  .catch((err) => {
    console.log(err);
  });

app.get("/", (req, res) => {
  res.send({ "Status": "Started" });
});

app.post("/register", async (req, res) => {
  const { name, email, mobile, password } = req.body;

  try {
    // Convert email to lowercase
    const normalizedEmail = email.toLowerCase();

    // Check if the user already exists
    const oldUser = await UserInfo.findOne({ email: normalizedEmail });

    if (oldUser) {
      return res.send({ data: "User already exists" });
    }

    // Create a new user
    await UserInfo.create({ name, email: normalizedEmail, mobile, password });
    res.send({ status: "ok", data: "User Created" });
  } catch (error) {
    res.send({ status: "error", data: error.message });
  }
});


app.listen(3000, () => {
  console.log('Server started on http://localhost:3000');
});
