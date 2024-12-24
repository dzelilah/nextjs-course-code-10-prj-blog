import { MongoClient } from "mongodb";

async function handler(req, res) {
  if (req.method === "POST") {
    const { email, name, message } = req.body;

    if (
      !email ||
      !email.includes("@") ||
      !name ||
      name.trim() === "" ||
      !message ||
      message.trim() === ""
    ) {
      res.status(422).json({ message: "Invalid Input" });
      return;
    }

    const newMessage = { email, name, message };
    let client;

    try {
      const uri = process.env.MONGO_URI; // Use environment variables for security
      client = await MongoClient.connect(uri);
      const db = client.db();

      const result = await db.collection("messages").insertOne(newMessage);
      newMessage.id = result.insertedId;

      res.status(201).json({ message: "Successfully stored", newMessage });
    } catch (error) {
      res.status(500).json({ message: "Operation failed", error: error.message });
    } finally {
      if (client) client.close();
    }
  } else {
    res.status(405).json({ message: "Method Not Allowed" });
  }
}

export default handler;