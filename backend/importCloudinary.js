import mongoose from "mongoose";
import dotenv from "dotenv";
import cloudinary from "cloudinary";
import Video from "./models/video.js";
dotenv.config();

// Cloudinary config
cloudinary.v2.config({
  cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET,
});

// Connect to MongoDB
mongoose
  .connect(process.env.MONGO_URI)
  .then(() => console.log("MongoDB connected"))
  .catch((err) => console.log("Mongo Error:", err));

async function importVideo() {
  try {
  console.log("Fetching latest Cloudinary video...");

  const result = await cloudinary.v2.search
    .expression(`resource_type:video`)
    .sort_by("uploaded_at", "desc")
    .max_results(1)
    .execute();

  if (!result.resources.length) {
      console.log("❌ No videos found in Cloudinary /hero-video folder");
      return mongoose.connection.close();
    }

    const file = result.resources[0];

    // Remove existing video from DB
    const existing = await Video.findOne();
    if (existing) {
      console.log("Deleting old video:", existing.cloudinary_id);
      await cloudinary.v2.uploader.destroy(existing.cloudinary_id, {
        resource_type: "video"
      });
      await existing.deleteOne();
    }

    // Save new video
    await Video.create({
      url: file.secure_url,
      cloudinary_id: file.public_id
    });

    console.log("✔ Latest video imported successfully!");
    mongoose.connection.close();

  } catch (err) {
    console.error("Error:", err);
    mongoose.connection.close();
  }
}

importVideo();
