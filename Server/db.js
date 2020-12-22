// Import MongoDB ATlas URL
const mongoURL = require("./config").mongoURL;
// Set up mongoose connection
const mongoose = require("mongoose");
// eslint-disable-next-line camelcase
let db = mongoose
  .connect(mongoURL, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() =>
    console.log(
      "MongoDB connected successfully \n=> DataBase:",
      mongoURL.split("/")[3]
    )
  )
  .catch(err => {
    console.log("MongoDB connection error", err);
  });
mongoose.Promise = global.Promise;
module.exports = db;