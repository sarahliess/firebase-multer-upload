const cors = require("cors");
const express = require("express");
const app = express();
const PORT = process.env.PORT || 8080;

//internal imports
const db = require("./db");
const postsRouter = require("./routes/posts");

//middlewares
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());
app.use("/", postsRouter);

db();

app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.listen(PORT, () => {
  console.log(`Example app listening at http://localhost:${PORT}`);
});