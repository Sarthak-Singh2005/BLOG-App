const mongoose = require("mongoose");
const { MongoMemoryServer } = require("mongodb-memory-server");

async function connectToDB() {
  const uri = process.env.MONGO_URL;

  try {
    // Try MongoDB Atlas first
    if (uri && uri.includes("mongodb+srv")) {
      await mongoose.connect(uri, {
        serverSelectionTimeoutMS: 5000,
        socketTimeoutMS: 45000,
        bufferCommands: false,
      });

      console.log("Connected to MongoDB Atlas");
      return;
    } else {
      throw new Error("MONGO_URL is missing or invalid");
    }
  } catch (err) {
    console.log("Atlas connection failed:");
    console.error(err.message);
    console.log("Falling back to local MongoDB Memory Server...");
  }

  // Fallback to Mongo Memory Server
  try {
    const mongoServer = await MongoMemoryServer.create();
    const mongoUri = mongoServer.getUri();

    await mongoose.connect(mongoUri);

    console.log("Connected to local MongoDB Memory Server");
  } catch (err) {
    console.error("Failed to connect to local MongoDB:");
    console.error(err.message);

    throw err;
  }
}

module.exports = connectToDB;
