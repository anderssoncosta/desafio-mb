const express = require("express");
const http = require("http");
const cors = require("cors");


const app = express();
const server = http.createServer(app);
const port = 3000

app.use(cors());
app.use(express.json());

let data = []

app.post("/registration", (req, res) => {
  const newForm = req.body;
  data.push(newForm);
  res.status(201).json(newForm);
})

app.get("/registration", async (req, res) => {
  res.json(data)
});

server.listen(port, () => {
  console.log(`listening on port ${port}`);
});
