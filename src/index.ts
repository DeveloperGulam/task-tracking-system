import * as dotenv from "dotenv";
dotenv.config();
import express, { Application } from "express";
import bodyParser from "body-parser";
import connection from "./config/database";
import taskRoutes from "./routes/taskRoutes";
import metricsRoutes from "./routes/metricsRoutes";
import allowLocalhostOnly from "./middleware/cors";

// Create Express application
const app: Application = express();

// Middleware
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

// CORS middleware
app.use(allowLocalhostOnly);

// Define API routes
app.use("/api", taskRoutes);
app.use("/api", metricsRoutes);

// Define a basic route
app.get("/", (req, res) => {
  res.send("Welcome to the Task Tracking System API");
});

// Start the server
const PORT: number = parseInt(process.env.PORT || "8100", 10);

app.listen(PORT, async () => {
  try {
    await connection.sync();
    console.log("Connected to database");
  } catch (error) {
    console.error(error);
  }
  console.log(`Server is running on port ${PORT}`);
});
