const express = require("express");
const mongoose = require("mongoose");
const routes = require("./routes")

const app = express();
const port = process.env.PORT || 3000;


const uri = "mongodb+srv://jovitoaddo:jovitoaddopassword@cluster0.kwuy5.mongodb.net/tugas";
mongoose
  .connect(uri)
  .then(() => {
    console.log("MongoDB Atlas Connected");
  })
  .catch((error) => {
    console.log(error);
  });

app.use(express.json());
app.use(routes)

app.listen(port, () => {
  console.log(`server running on port ${port}`);
});