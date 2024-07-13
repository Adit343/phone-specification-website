const express = require('express');
const mongoose = require('mongoose');

const app = express();
const port = 5500;

// Connect to MongoDB
mongoose.connect('mongodb+srv://aditshah760:adit1234@cluster0.ifpouet.mongodb.net/aditfeedback?retryWrites=true&w=majority&appName=Cluster0')

  .then(() => console.log('Connected to MongoDB'))
  .catch(err => console.error('Failed to connect to MongoDB', err));

// Create a Mongoose schema
const feedbackSchema = new mongoose.Schema({
  name: String,
  email: String,
  message: String
});

// Create a Mongoose model
const Feedback = mongoose.model('Feedback', feedbackSchema);

// Middleware to parse JSON
app.use(express.json());

// Serve static files (e.g., your Bootstrap files)
app.use(express.static('public'));

// Route to handle form submission
app.post('/submit-feedback', (req, res) => {
  const { name, email, message } = req.body;

  // Create a new feedback document
  const newFeedback = new Feedback({
    name,
    email,
    message
  });

  // Save the document to the database
  newFeedback.save()
    .then(() => res.status(200).send('Feedback submitted successfully!'))
    .catch((err) => res.status(500).send('Error saving feedback to the database.'));
});

// Start the server
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
