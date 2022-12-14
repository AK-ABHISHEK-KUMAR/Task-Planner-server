const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const todoRoute = require("./routes/todosRoute");

const DB_URL = process.env.DB_URL || "mongodb://0.0.0.0:27017/TodoList";
const PORT = process.env.PORT || 3001;

const app = express();

app.use(express.json());
app.use(cors({origin: "https://task-planner.onrender.com"}));

// app.get("/", (req, res) => res.send("Hello World!"));

app.use("/todos", todoRoute);

mongoose
  .connect(DB_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    console.log("DB connected");
    app.listen(PORT, console.log(`Server running on port ${PORT}`));
  })
  .catch((err) => {
    console.log(err);
  });

module.exports = app;
