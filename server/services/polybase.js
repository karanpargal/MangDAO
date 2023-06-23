const {Polybase} = require("@polybase/client");
const {ethPersonalSign} = require("@polybase/eth");


async function getPolybaseDB(){
    const db = new Polybase({
        defaultNamespace: "pk/0x0c8a5db5f64f9e23a7c7ad138898876ae5a373926869f83fca337a2867b7335f1b107636f3f8a88b008d1b8f09e360c83666bb93692396482ac02acfd07c1253/GatedDAO",
      });
    return db;
}

async function createUser(sign,publicKey){
    const db = await getPolybaseDB();
    console.log(publicKey);
    db.signer(async (signer) => {
        return {
            h: 'eth-personal-sign',
            sig: sign,
        }
    });
    let user;
    try{
        user = await db.collection("User").get();
        return user;
    } catch (e){
        console.log(e);
    }
}

module.exports = createUser;