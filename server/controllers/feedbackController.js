import feedbackModel from "../models/feedbackModel";

const feedbackController = async (req, res) => {
  try {
    const { name, email, feedbackText } = req.body;
    if (!name || !email || !feedbackText) {
      return res.status(400).json({ error: "All fields are required" });
    }

    // Creating a new feedback entry
    const feedback = new feedbackModel({
      name,
      email,
      feedbackText,
    });

    // Save the feedback to the database
    await feedback.save();

    // Sending a success response
    res.status(201).json({ message: "Feedback submitted successfully" });
  } catch (error) {
    console.error("Error submitting feedback:", error);
    res
      .status(500)
      .json({ error: "An error occurred while submitting feedback" });
  }
};

export default feedbackController;
