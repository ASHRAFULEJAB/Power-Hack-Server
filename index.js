const { MongoClient, ServerApiVersion } = require("mongodb");
const express = require("express");
const cors = require("cors");
const app = express();
app.use(cors());
require("dotenv").config();

//middleware
app.use(express.json());
const port = process.env.PORT || 5000;

app.get("/", (req, res) => {
  res.send("Coding test is runnning...");
});
//  username= coreDevDB
// password:STE7m7E60nlNHStd

// mongoDB is connected Here
const uri =
  "mongodb+srv://coreDevDB:STE7m7E60nlNHStd@cluster0.dnw37y6.mongodb.net/?retryWrites=true&w=majority";
const client = new MongoClient(uri, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  serverApi: ServerApiVersion.v1,
});

async function run() {
  try {
    const userCollection = client.db("coreDevDB").collection("users");
    //email is posted here
    app.post("/sendemail", async (req, res) => {
      const user = req.body;
      console.log(user);
      const result = await userCollection.insertOne(user);
      res.send(result);
    });
  } finally {
  }
}
run().catch(console.dir);
app.listen(port, () => {
  console.log(`Coding test is running on ${port}`);
});
