const todos = require("../../model/todoSchema");

async function fetchData(req, res, next) {
  const { id, uuid } = req.params;
  const stat = id !== undefined ? { _id: id } : { uuid };

  await todos
    .find(stat)
    .then((result) => res.status(200).json(result))
    .catch((err) => {
      res.sendStatus(404);
      console.error(err);
    });
  next();
}

async function deleteData(req, res, next) {
  const { uuid } = req.params;
  const { id } = req.body;
  const stat = id !== undefined ? { _id: id } : { uuid };

  await todos
    .deleteMany(stat)
    .then(() => {
      res.sendStatus(201);
      return next();
    })
    .catch((err) => {
      console.error(err);
      return res.sendStatus(404);
    });
}

async function updateData(req, res, next) {
  const { id } = req.params;
  const { title } = req.body;
  const stat =
    title !== undefined ? { title } : { status: true, doneAt: Date.now() };

  await todos
    .findByIdAndUpdate({ _id: id }, stat)
    .then(() => {
      return next();
    })
    .catch((err) => {
      console.error(err);
      return res.sendStatus(400);
    });
}

module.exports = { fetchData, updateData, deleteData };
