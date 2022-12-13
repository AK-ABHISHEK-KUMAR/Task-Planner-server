const mongoose = require("mongoose");

const schema = new mongoose.Schema({
  taskNo: Number,
  uuid: String,
  title: String,
  status: Boolean,
  createdAt: Date,
  doneAt: Date,
});

const todoSchema = mongoose.model("todos", schema);

module.exports = todoSchema;
