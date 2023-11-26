// Hans Christian Hananto | XII RPL 3
const express = require("express");
const app = express();
const userrouter = require("./router/api");
const connectDB = require("./config/db");

const port = 3000;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.use(userrouter);

connectDB();

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
