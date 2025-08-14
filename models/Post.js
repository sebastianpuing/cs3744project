import mongoose from "mongoose";

const {Schema} = mongoose;

/**
 * Defines the schema
 */
const postSchema = new Schema({
  date: {
    type: String,
    required: true,
    unique: true,
  },
  intake: {
    type: Number,
    min: 1,
    max: 128,
    default: 0,
  },
  goal: {
    type: Number,
    default: 100,
    min: 1,
    max: 250,
  },
});

export default mongoose.models.Post || mongoose.model("Post", postSchema);
