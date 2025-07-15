// index.js
const express = require("express");
const app = express();
const port = 3000;

require("dotenv").config();
const { connectDB } = require("./db");
const studentRoutes = require("./routes/routes");

app.use(express.json());
app.use("/students", studentRoutes);

connectDB()
  .then(() => {
    app.listen(port, () => {
      console.log(`Server running on port ${port}`);
    });
  })
  .catch((err) => console.error("DB Connection failed", err));
