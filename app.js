//Server side feedback processing.
//Understands how feedback is stored in the database.

const express = require ('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');

const app = express();
const port = 5500;

// Connect to MongoDB
mongoose.connect('mongodb+srv://aditshah760:adit1234@cluster0.ifpouet.mongodb.net/aditfeedback?retryWrites=true&w=majority', {
  useNewUrlParser: true,
  useUnifiedTopology: true
});

// Create a Mongoose schema
const feedbackSchema = new mongoose.Schema({
  name: String,
  email: String,
  message: String
});

// Create a Mongoose model
const Feedback = mongoose.model('Feedback', feedbackSchema);

// Middleware to parse JSON
app.use(bodyParser.json());

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

//   Save the document to the database
newFeedback.save()
.then(()=> res.status(200).send('Feedback submitted successfully!'))
.catch((err)=> res.status(500).send('Error saving feedback to the database.'))

});

// Start the server
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});

