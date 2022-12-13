const router = require("express").Router();
const todos = require("../Controller/todos");
const CFn = require("../Controller/Middleware/commonQuries");

router.get("/:uuid", CFn.fetchData, todos.getAllTasks);
router.post("/new", todos.addNewTask);
router.put("/update/title/:id", CFn.updateData, todos.updateTaskTitle);
router.put(
  "/update/status/:id",
  CFn.updateData,
  CFn.fetchData,
  todos.updateTaskStatus
);
router.patch("/", CFn.deleteData, todos.deleteTask);
router.delete("/:uuid", CFn.deleteData, todos.deleteAllTask);

module.exports = router;
