const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const todoSchema = new Schema({
  todo: {
    type: String,
    // required: true,
  },
  desc: {
    type: String,
  },
  deadline: {
    type: Date,
    default: Date.now,
  },
});

// const Todo = mongoose.model("TodoTest", todoSchema);
// const test = new Todo({});
// console.log(test.todo);

module.exports = mongoose.model("Todotest", todoSchema);
// module.exports = todoSchema;

