const { Polybase } = require("@polybase/client");
const { ethPersonalSign } = require("@polybase/eth");
require("dotenv").config();

async function getPolybaseDB() {
  const db = new Polybase({
    defaultNamespace:
      "pk/0x0c8a5db5f64f9e23a7c7ad138898876ae5a373926869f83fca337a2867b7335f1b107636f3f8a88b008d1b8f09e360c83666bb93692396482ac02acfd07c1253/MANGDAO",
  });
  return db;
}

async function createUser(publicKey) {
  const db = await getPolybaseDB();
  db.signer(async (signer) => {
    return {
      h: "eth-personal-sign",
      sig: process.env.SIGN,
    };
  });
  let user;
  user = await db.collection("User").record(publicKey).get();
  if (user.data == null) {
    user = await db.collection("User").create([publicKey, publicKey]);
  }
  return user;
}

async function getDAO() {
  const db = await getPolybaseDB();
  db.signer(async (signer) => {
    return {
      h: "eth-personal-sign",
      sig: process.env.SIGN,
    };
  });

  let DAOs;
  DAOs = await db.collection("DAO").get();
  return DAOs;
}

async function createDAO(name, description) {
  const db = await getPolybaseDB();
  db.signer(async (signer) => {
    return {
      h: "eth-personal-sign",
      sig: process.env.SIGN,
    };
  });
  let DAO;
  DAO = await db.collection("DAO").create([name, name, description]);
  return DAO;
}

async function getSingleDAO(dao) {
    const db = await getPolybaseDB();
    db.signer(async (signer) => {
        return {
            h: "eth-personal-sign",
            sig: process.env.SIGN,
        };
        }
    );
    let DAO;
    DAO = await db.collection("DAO").record(dao).get();
    return DAO;
}

async function giveNFT(publicKey,dao){
    const db = await getPolybaseDB();
    db.signer(async (signer) => {
        return {
            h: "eth-personal-sign",
            sig: process.env.SIGN,
        };
        }
    );
    let NFT;
    NFT = await db.collection("NFT").create([publicKey+dao,db.collection("User").record(publicKey),db.collection("DAO").record(dao)]);
    return NFT;
}

async function checkNFT(publicKey,dao){
    const db = await getPolybaseDB();
    db.signer(async (signer) => {
        return {
            h: "eth-personal-sign",
            sig: process.env.SIGN,
        };
        }
    );
    let NFT;
    NFT = await db.collection("NFT").record(publicKey+dao).get();
    return NFT;
}

async function addMember(publicKey,dao){
    const db = await getPolybaseDB();
    db.signer(async (signer) => {
        return {
            h: "eth-personal-sign",
            sig: process.env.SIGN,
        };
        }
    );
    let member;
    member = await db.collection("DAO").record(dao).call("addMember",[db.collection("NFT").record(publicKey+dao)]);
    return member;
}

async function addBounty(title,details,deadline,prize,dao){
    const db = await getPolybaseDB();
    db.signer(async (signer) => {
        return {
            h: "eth-personal-sign",
            sig: process.env.SIGN,
        };
        }
    );
    let bounty;
    bounty = await db.collection("Bounty").create([Date.now().toString(),title,details,deadline,prize,db.collection("DAO").record(dao)]);
    return bounty;
}


module.exports = { createUser, getDAO, createDAO, giveNFT, addMember, addBounty, getSingleDAO, checkNFT};
