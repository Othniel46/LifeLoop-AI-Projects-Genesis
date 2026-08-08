const express = require("express");

const router = express.Router();

router.get("/", (req, res) => {
  res.json({
    success: true,
    project: "LifeLoop-AI Project Genesis",
    status: "online",
    service: "backend-api",
    timestamp: new Date().toISOString(),
  });
});

module.exports = router;
