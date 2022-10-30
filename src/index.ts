import express from "express";
import "dotenv/config";

const app = express();
const port = 4000;

app.get("/", (req, res) => {
  res.send("First Get!");
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
