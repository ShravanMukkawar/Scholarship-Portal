const express = require('express');
const { signup, signin, google } = require('../controllers/auth.js');

const router = express.Router();

router.post('/register', signup);
router.post('/login', signin);
router.post('/google', google); // Add Google auth route if needed

module.exports = router;
