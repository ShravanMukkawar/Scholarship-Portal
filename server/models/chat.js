const mongoose = require('mongoose');

const chatSchema = new mongoose.Schema({
  userId: String,
  messages: [{
    role: String,
    content: String
  }],
  timestamp: { type: Date, default: Date.now }
});

module.exports = mongoose.model('Chat', chatSchema);