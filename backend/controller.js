const mongoose = require("mongoose");
const TodoModel = require("./model");

// get all todos
const getTodos = async (req, res) => {
  try {
    const todos = await TodoModel.find({}).sort({ createdAt: -1 });
    res.status(200).json(todos);
  } catch (error) {
    return res.status(404).json({ error: error.message });
  }
};

// get a single todo
const getTodo = async (req, res) => {
  const { id } = req.params;

  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res.status(404).json({ error: "No such todo" });
  }

  const todo = await TodoModel.findById(id);

  if (!todo) {
    return res.status(404).json({ error: "No such todo" });
  }

  res.status(200).json(todo);
};

// create a new todo
const createTodo = async (req, res) => {
  const { todo, desc, deadline } = req.body;
  if (!todo) {
    return res.status(400).json({ error: "Todo must be filled in" });
  }

  // add to the database
  try {
    // const todo = new TodoModel({ todo: todo, desc: desc, deadline: deadline });
    // await todo.save();
    const td = await TodoModel.create({ todo, desc, deadline });
    res.status(200).json(td);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

// delete a todo
const deleteTodo = async (req, res) => {
  const { id } = req.params;

  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res.status(400).json({ error: "No such todo" });
  }

  const todo = await TodoModel.findOneAndDelete({ _id: id });

  if (!todo) {
    return res.status(400).json({ error: "No such todo" });
  }

  res.status(200).json(todo);
};

// update a todo
const updateTodo = async (req, res) => {
  const { id } = req.params;

  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res.status(400).json({ error: "No such todo" });
  }

  const todo = await TodoModel.findOneAndUpdate(
    { _id: id },
    {
      ...req.body,
    }
  );

  if (!todo) {
    return res.status(400).json({ error: "No such todo" });
  }

  res.status(200).json(todo);
};

module.exports = {
  getTodos,
  getTodo,
  createTodo,
  deleteTodo,
  updateTodo,
};
