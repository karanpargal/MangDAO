const express = require("express");
const app = express();
const bodyParser = require("body-parser");
app.use(bodyParser.json());
const cors = require("cors");
const port = 8000;
const createUser = require("./services/polybase.js");

app.use(cors());

app.post("/getPolybaseDB", async (req, res) => {
  const sign = req.body.sign;
  const publicKey = req.body.publicKey;
  const user = await createUser(sign,publicKey);
  res.send(user);
});

app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
