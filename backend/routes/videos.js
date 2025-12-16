import express from "express";
import multer from "multer";
import cloudinary from "cloudinary";
import Video from "../models/video.js";
import stream from "stream";
const router = express.Router();

// Cloudinary Config
cloudinary.v2.config({
  cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET,
});

// Multer
const upload = multer({ storage: multer.memoryStorage() });


 
// -------------------------------------------------------
// 📌 Upload Hero Video (replaces old one automatically)
// -------------------------------------------------------
router.post("/", upload.single("video"), async (req, res) => {
  try {
    if (!req.file)
      return res.status(400).json({ error: "Video file is required" });

    // Delete existing video
    const existing = await Video.findOne();
    if (existing) {
      await cloudinary.v2.uploader.destroy(existing.cloudinary_id, {
        resource_type: "video",
      });
      await existing.deleteOne();
    }

    // Upload new video stream
    const uploadStream = cloudinary.v2.uploader.upload_stream(
      { folder: "hero-video", resource_type: "video" },
      async (error, result) => {
        if (error) return res.status(500).json({ error: error.message });

        const newVideo = await Video.create({
          url: result.secure_url,
          cloudinary_id: result.public_id,
        });

        res.json({ message: "Uploaded successfully", video: newVideo });
      }
    );

    const bufferStream = new stream.PassThrough();
    bufferStream.end(req.file.buffer);
    bufferStream.pipe(uploadStream);

  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});


// -------------------------------------------------------
// 📌 Get Latest Hero Video
// -------------------------------------------------------
router.get("/", async (req, res) => {
  try {
    const video = await Video.findOne().sort({ createdAt: -1 });
    res.json({ video });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

export default router;
