const express = require("express");
const app = express();
const cors = require("cors");
const db = require("../config/database.js");

const port = 3000;

app.use(express.json());
app.use(cors());

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});

app.get("/api", async (req, res) => {
  res.send("Hello World!");
});


