const mongoose = require("mongoose");
const connectionURI = "127.0.0.1:27017";
mongoose.connect("mongodb://" + connectionURI + "/test-app", {
  useNewUrlParser: true,
  useCreateIndex: true,
  useUnifiedTopology: true,
  useFindAndModify: false,
});
console.log(`MongoDB connected to : ${connectionURI}`);
