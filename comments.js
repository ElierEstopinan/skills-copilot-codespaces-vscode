// Create web server
// Create a new server
const express = require('express');
const app = express();
// Create a new router
const commentsRouter = express.Router();

// Create a new comment
commentsRouter.post('/', (req, res) => {
  res.json({ message: 'Create a new comment' });
});

// Get all comments
commentsRouter.get('/', (req, res) => {
  res.json({ message: 'Get all comments' });
});

// Get a comment by ID
commentsRouter.get('/:id', (req, res) => {
  res.json({ message: 'Get a comment by ID' });
});

// Update a comment
commentsRouter.put('/:id', (req, res) => {
  res.json({ message: 'Update a comment' });
});

// Delete a comment
commentsRouter.delete('/:id', (req, res) => {
  res.json({ message: 'Delete a comment' });
});

// Export the router
module.exports = commentsRouter;
