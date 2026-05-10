const express = require("express");
const cors = require("cors");
const postRoutes = require("./src/routes/post.routes");
const cookieParser = require("cookie-parser");
require("dotenv").config();
const app = express();
const authRoutes = require("./src/routes/auth.routes");
const connectToDB = require("./src/config/database"); // 👈 import

// 🔥 CONNECT TO DB

connectToDB()
  .then(() => {
    app.use(
      cors({
        origin: true,
        credentials: true,
      }),
    );

    app.use(express.json());
    app.use(cookieParser());

    app.use("/api/auth", authRoutes);
    app.use("/api/post", postRoutes);
    app.listen(5000, () => {
      console.log("Server running on port 5000");
    });
  })
  .catch((err) => {
    console.error(
      "Failed to start server because MongoDB did not connect.",
      err,
    );
    process.exit(1);
  });
