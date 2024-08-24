const mongoose = require('mongoose');
const config = require("config");
const dbgr = require("debug")("development:mongoose");

// Ensure that MONGODB_URI is correctly formatted and exists in your config files
const mongoURI = `${config.get("MONGODB_URI")}/scrach-project`;

mongoose
  .connect(mongoURI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(function() {
    dbgr("DB connection successful");
  })
  .catch(function(err) {
    dbgr("DB connection error:", err);
  });

module.exports = mongoose.connection;
