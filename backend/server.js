const express = require("express");
const cors = require("cors");
const helmet = require("helmet");
const morgan = require("morgan");
require("dotenv").config();

const healthRoutes = require("./routes/health.routes");

const app = express();

const PORT = process.env.PORT || 5000;

// Security
app.use(helmet());

// Middleware
app.use(cors());
app.use(express.json());
app.use(morgan("dev"));

// API routes
app.use("/api/health", healthRoutes);

// Root endpoint
app.get("/", (req, res) => {
  res.json({
    project: "LifeLoop-AI Project Genesis",
    message: "LifeLoop-AI Backend API",
    status: "online",
  });
});

// 404 handler
app.use((req, res) => {
  res.status(404).json({
    success: false,
    message: "API endpoint not found",
  });
});

// Start server
app.listen(PORT, () => {
  console.log(
    `🚀 LifeLoop-AI API running on http://localhost:${PORT}`
  );
});
