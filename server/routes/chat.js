const express = require('express');
const { sendMessage,getChatHistory } = require('../controllers/chatcontroller.js');

const router = express.Router();

router.post('/message',sendMessage);
router.get('/history/:userId',getChatHistory); 


module.exports = router;
