import mongoose from "mongoose";

const videoSchema = new mongoose.Schema(
  {
    url: { type: String, required: true },
    cloudinary_id: { type: String, required: true },
  },
  { timestamps: true }
);

export default mongoose.model("Video", videoSchema);
