import dotenv from "dotenv";
dotenv.config(); // MUST be on top

import express from "express";
import mongoose from "mongoose";
import cors from "cors";
import http from "http";
import { Server } from "socket.io";

import videosRoutes from "./routes/videos.js";

const app = express();

// Create HTTP server wrapper (IMPORTANT for Socket.IO)
const server = http.createServer(app);

// Socket.IO setup
export const io = new Server(server, {
  cors: {
    origin: "*",
  },
});

// Middlewares
app.use(cors());
app.use(express.json());

// Routes
app.use("/videos", videosRoutes);

// MongoDB connection
mongoose
  .connect(process.env.MONGO_URI)
  .then(() => console.log("MongoDB connected"))
  .catch((err) => console.log(err));

// Socket.IO events
io.on("connection", (socket) => {
  console.log("Client connected:", socket.id);

  socket.on("disconnect", () => {
    console.log("Client disconnected:", socket.id);
  });
});

// Start server
const PORT = process.env.PORT || 5000;
server.listen(PORT, () => console.log(`Backend running on port ${PORT}`));
