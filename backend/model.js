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


module.exports = mongoose.model("Todotest", todoSchema);

