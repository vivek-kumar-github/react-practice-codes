import express from "express";
import cors from "cors";
import { MongoClient } from "mongodb";

let connectionString = "mongodb://127.0.0.1:27017";
let app = express();

app.use(express.json());

app.get("/getusers", async (req, res) => {
    const client = new MongoClient(connectionString);

    try {
        await client.connect();
        let database = client.db("reactdb");

        let documents = await database.collection("tblusers").find({}).toArray();

        res.send(documents);
    } catch (err) {
        console.error("Database Error: ", err);
        res.status(500).send("Internal Server Error");
    } finally {
        await client.close();
    }
});

app.listen(4000, () => {
    console.log("Server started at http://127.0.0.1:4000");
});