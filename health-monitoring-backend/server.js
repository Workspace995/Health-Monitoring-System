const express = require("express");
const http = require("http");
const socketIo = require("socket.io");
const mongoose = require("mongoose");
const cors = require("cors");
const dotenv = require("dotenv");
const path = require("path");
const bodyParser = require('body-parser');
const connectDB = require('./config/db');
require('dotenv').config();

// Load environment variables from .env file
dotenv.config();

const app = express();
const server = http.createServer(app);
const io = socketIo(server, {
  cors: {
    origin: "*",
    methods: ["GET", "POST"],
  },
});

// Connect to MongoDB
 connectDB();
mongoose.connect(process.env.MONGO_URI)
  .then(() => console.log('MongoDB connected'))
  .catch((err) => console.error('MongoDB connection error:', err));



// Middleware
app.use(cors());
app.use(express.json());
app.use(bodyParser.json());

// Import routes
const healthDataRoutes = require("./routes/healthDataRoutes");
const additionalHealthDataRoutes = require("./routes/additionalHealthDataRoutes");
const authRoutes = require("./routes/authRoutes");
const healthRecommendationRoutes = require("./routes/healthRecommendationRoutes");
const virtualAssistantRoutes = require("./routes/virtualAssistantRoutes");
const communityRoutes = require("./routes/communityRoutes");
const healthInsightsRoutes = require("./routes/healthInsightsRoutes");
const rewardRoutes = require("./routes/rewardRoutes");

// Routes
app.use("/api/healthdata", healthDataRoutes);
app.use("/api/additionalhealthdata", additionalHealthDataRoutes);
app.use('/api/virtualassistant', virtualAssistantRoutes);
app.use("/api/auth", authRoutes);
app.use("/api/recommendations", healthRecommendationRoutes);
app.use("/api/assistant", virtualAssistantRoutes);
app.use("/api/community", communityRoutes);
app.use("/api/insights", healthInsightsRoutes);
app.use("/api/rewards", rewardRoutes);

// Socket.IO
io.on("connection", (socket) => {
  console.log("New client connected");

  socket.on("disconnect", () => {
    console.log("Client disconnected");
  });

  socket.on("healthData", (data) => {
    io.emit("updateHealthData", data);
  });
});

const PORT = process.env.PORT || 5000;

server.listen(PORT, () => console.log(`Server running on port ${PORT}`));
