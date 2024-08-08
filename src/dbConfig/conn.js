const mongoose = require("mongoose");
mongoose
  .connect("mongodb://localhost:27017/prepInst_API")
  .then(() => console.log("server was connected"))
  .catch(() => console.log("server was not connected"));
