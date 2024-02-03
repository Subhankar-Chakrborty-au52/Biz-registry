// importing dependencies

require("./db/conn");
const express = require("express");
require("dotenv").config();
const router = require("./routes/router");
const cors = require("cors");
const cookiParser = require("cookie-parser")

const app = express();

app.use(express.json());
app.use(cors());
app.use(router);
app.use(cookiParser());

// Port and Server starting
const PORT = process.env.PORT;
app.listen(PORT, () => {
  console.log(
    `Node server running in ${process.env.DEV_MODE} Mode on Port ${process.env.PORT}`
  );
});
