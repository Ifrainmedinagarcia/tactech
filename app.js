const express = require("express");
const cors = require("cors");
require("dotenv").config;

const PORT = 3001;

//Middleware
const app = express();
app.use(cors());
app.use(express.json());
app.use(
  express.urlencoded({
    extended: true,
  })
);

//Requiere Routes
const character = require("./routers/character.routes");

app.use("/v1/api/character", character);

app.listen(PORT, () => {
  console.log(`App started in the port ${PORT}`);
});
