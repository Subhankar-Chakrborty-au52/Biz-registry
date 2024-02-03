const mongoose = require("mongoose");

const DB =
  "mongodb+srv://subhankarchakrborty:bizregistry@cluster0.6mqw7sz.mongodb.net/?retryWrites=true&w=majority";

mongoose
  .connect(DB, {
    useUnifiedTopology: true,
    useNewUrlParser: true,
  })

  .then(() => {
    console.log("Database connected successfully");
  })

  .catch((error) => {
    console.log(error , "Error in db connected");
  });
