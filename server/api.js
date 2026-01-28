import express from "express";
import cors from "cors";
import { MongoClient } from "mongodb";

let connectionString = "mongodb://127.0.0.1:27017";

const app = express();
app.use(express.urlencoded({
    extended: true
}));
app.use(express.json());
app.use(cors());

async function getDbCollection() {
    const client = new MongoClient(connectionString);
    await client.connect();
    return {
        client,
        collection: client.db("reactdb").collection("tblusers")
    }
}

app.get("/getusers", async (req, res) => {
    const { client, collection } = await getDbCollection();

    try {
        await client.connect();
        const documents = await collection.find({}).toArray();
        res.send(documents);
    } catch (err) {
        console.error("Database Error: ", err);
        res.status(500).send("Internal Server Error");
    } finally {
        await client.close();
    }
});

app.post("/registeruser", async (req, res) => {
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
    }
    const { client, collection } = await getDbCollection();

    try {
        await collection.insertOne(userdetails);
        console.log("Record Inserted");
        res.status(201).json({ message: "User Registered Successfully" });
    } catch (err) {
        console.log("Insert Error: ", err);
        res.status(500).send("Internal Server Error");
    } finally {
        await client.close();
    }
});

app.listen(4000, () => {
    console.log("Server started at http://127.0.0.1:4000");
});