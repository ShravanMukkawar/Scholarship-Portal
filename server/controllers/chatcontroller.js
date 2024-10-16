const geminiService = require('../services/geminiService');
const Chat = require('../models/chat');

exports.sendMessage = async (req, res) => {
    try {
      const { message, userId, context } = req.body;

  
      let chat = await Chat.findOne({ userId });
      if (!chat) {
        chat = new Chat({ userId, messages: [] });
      }
  
      chat.messages.push({ role: 'user', content: message });
  
      const response = await geminiService.generateResponse(chat.messages, context);
  
      chat.messages.push({ role: 'model', content: response });
  
      await chat.save();
  
      res.json({ response });
    } catch (error) {
      console.error('Error in sendMessage:', error);
      res.status(500).json({ error: 'An error occurred while processing your request.' });
    }
  };

exports.getChatHistory = async (req, res) => {
    try {
      const { userId } = req.params;
      const chat = await Chat.findOne({ userId });
      if (!chat) {
        return res.status(404).json({ error: 'No chat history found for this user.' });
      }
      res.json({ history: chat.messages });
    } catch (error) {
      console.error('Error in getChatHistory:', error);
      res.status(500).json({ error: 'An error occurred while retrieving chat history.' });
    }
  };