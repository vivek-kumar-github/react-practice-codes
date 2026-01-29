import express from "express";
import cors from "cors";
import { MongoClient } from "mongodb";

let connectionString = "mongodb://127.0.0.1:27017";
const app = express();

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(cors());

const client = new MongoClient(connectionString);

async function getCollection(collectionName) {
    await client.connect();
    return client.db("reactdb").collection(collectionName);
}

app.get("/getusers", async (req, res) => {
    try {
        const collection = await getCollection("tblusers");
        const documents = await collection.find({}).toArray();
        res.send(documents);
    } catch (err) {
        console.error("Database Error: ", err);
        res.status(500).send("Internal Server Error");
    }
});

app.post("/registeruser", async (req, res) => {
    try {
    const userdetails = {
        UserId: req.body.UserId,
        UserName: req.body.UserName,
        Password: req.body.Password,
        Age: parseInt(req.body.Age),
        Mobile: req.body.Mobile,
        Subscribed:
            req.body.Subscribed === true ||
            req.body.Subscribed === "true" ||
            req.body.Subscribed === "on"
    };

    const collection = await getCollection("tblusers");
    await collection.insertOne(userdetails);
    res.status(201).json({message: "User Registered Successfully"});
    } catch (err) {
        console.error("Insert Error: ", err);
        res.status(500).send("Internal Server Error");
    }
});

app.get("/getproducts", async (req, res) => {
    try {
        const collection = await getCollection("tblproducts");
        const documents = await collection.find({}).toArray();
        res.send(documents);
    } catch (err) {
        console.error("Database Error : ", err);
        res.status(500).send("Internal Server Error");
    }
});

app.get("/getcategories", async (req, res) => {
    try {
        const collection = await getCollection("tblcategories");
        const documents = await collection.find({}).toArray();
        res.send(documents);
    } catch (err) {
        console.error("Database Error : ", err);
        res.status(500).send("Internal Server Error");
    }
});

app.get("/getproduct/:id", async (req, res) => {
    let productId = parseInt(req.params.id);
    try {
        const collection = await getCollection("tblproducts");
        const documents = await collection.find({id: productId}).toArray();
        res.send(documents);
    } catch (err) {
        console.error("Database Error : ", err);
        res.status(500).send("Internal Server Error");
    }
});

app.listen(4000, () => {
    console.log("Server started at http://127.0.0.1:4000");
});