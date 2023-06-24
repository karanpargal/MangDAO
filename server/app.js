const express = require("express");
const app = express();
const bodyParser = require("body-parser");
app.use(bodyParser.json());
const cors = require("cors");
const port = 8000;
const {
  createUser,
  createDAO,
  getDAO,
  giveNFT,
  addMember,
  addBounty,
  getSingleDAO,
  checkNFT
} = require("./services/polybase.js");

app.use(cors());

app.post("/getPolybaseDB", async (req, res) => {
  const publicKey = req.body.publicKey;
  const user = await createUser(sign, publicKey);
  res.send(user);
});

app.post("/createUser", async (req, res) => {
  const publicKey = req.body.publicKey;
  const user = await createUser(publicKey);
  res.send(user);
});

app.post("/createDAO", async (req, res) => {
  const name = req.body.name;
  const description = req.body.description;
  const DAO = await createDAO(sign, name, description);
  res.send(DAO);
});

app.get("/getDAO", async (req, res) => {
  const DAOs = await getDAO();
  res.send(DAOs);
});

app.get("/getSingleDAO", async (req, res) => {
  const dao = req.query.dao;
  const DAO = await getSingleDAO(dao);
  res.send(DAO);
});

app.post("/giveNFT", async (req, res) => {
  const publicKey = req.body.publicKey;
  const dao = req.body.dao;
  const NFT = await giveNFT(publicKey, dao);
  res.send(NFT);
});

app.post("/checkNFT", async (req, res) => {
  const publicKey = req.body.publicKey;
  const dao = req.body.dao;
  const NFT = await checkNFT(publicKey, dao);
  res.send(NFT);
});

app.post("/addMember", async (req, res) => {
  const publicKey = req.body.publicKey;
  const dao = req.body.dao;
  const member = await addMember(publicKey, dao);
  res.send(member);
});

app.post("/addBounty", async (req, res) => {
  const dao = req.body.dao;
  const title = req.body.title;
  const details = req.body.details;
  const deadline = Date.now() + req.body.deadline * 1000 * 60 * 60 * 24;
  const prize = req.body.prize;
  const bounty = await addBounty(title, details, deadline, prize, dao);
  res.send(bounty);
});

app.listen(port, () => {
  console.log(`App listening at http://localhost:${port}`);
});
