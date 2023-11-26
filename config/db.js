// Hans Christian Hananto | XII RPL 3

const mongoose = require("mongoose");

const mongoDB = async function main() {
  await mongoose.connect("mongodb://127.0.0.1:27017/paskk4a"); //nama database yang digunakan
  console.log("DB Connected");
};

module.exports = mongoDB;
