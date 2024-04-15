const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const todoSchema = new Schema({
  todo: {
    type: String,
    required: true,
  },
  desc: {
    type: String,
  },
  deadline: {
    type: Date,
    default: Date.now,
  },
});

const Todo = mongoose.model("Todo", todoSchema);
const test = new Todo({ todo: "test", desc: "desc" });
console.log(test.todo);

module.exports = mongoose.model("Todo", todoSchema);
