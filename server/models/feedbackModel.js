import mongoose, { Schema } from "mongoose";

const feedbackSchema = new Schema({
  name: { type: Schema.Types.ObjectId, ref: "User", required: true },
  email: {
    type: Schema.Types.ObjectId,
    ref: "User",
    required: true,
  },
  feedbackText: {
    type: String,
  },
});

const feedbackModel = mongoose.model("Feedback", feedbackSchema);

export default feedbackModel;
