require("dotenv").config({ path: "./.env.be.local" });
const mongoose = require("mongoose");
const express = require("express");
const routes = require("./routes");

const app = express();
const port = process.env.PORT;
// middleware for parsing json
app.use(express.json());

// custom middleware
app.use((req, res, next) => {
  // show path and type of request
  console.log(req.path, req.method);
  next();
});

app.use("/api/todos", routes);
// app.get("/", (req, res) => {
//   res.send("Hello World!");
// });

// connect to db
async function main() {
  try {
    await mongoose.connect(process.env.MONGO_URI);
    console.log("connected to database");
    // listen to port
    app.listen(port, () => {
      console.log("listening for requests on port", port);
    });

  } catch (error) {
    console.log(error);
  }
}
main();
