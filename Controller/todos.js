const todos = require("../model/todoSchema");

module.exports.getAllTasks = (req, res) => {
  console.log("Sending Data.");
};

module.exports.addNewTask = async (req, res) => {
  console.log("Saving Data.");
  const { taskNo, title, status, uuid } = req.body;
  const task = new todos({
    taskNo,
    uuid,
    title,
    status,
    createdAt: Date.now(),
    doneAt: status ? Date.now() : null,
  });
  await task
    .save()
    .then((result) => res.status(201).json(result))
    .catch((err) => {
      res.sendStatus(400);
      console.error(err);
    });
};

module.exports.updateTaskTitle = (req, res) => {
  console.log("Updating Title.");
  res.sendStatus(201);
};

module.exports.updateTaskStatus = (req, res) => {
  console.log("Updating Status.");
};

module.exports.deleteTask = (req, res) => {
  console.log("Deleting Data.");
};

module.exports.deleteAllTask = (req, res) => {
  console.log("Deleting All Data.");
};
