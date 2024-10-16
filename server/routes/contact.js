// routes/contactRoutes.js
const express = require('express');
const { sendQuery, getQuery } = require('../controllers/contactcontroller.js'); // Ensure the name matches exactly

const router = express.Router();

router.post('/smessage', sendQuery);
router.get('/gmessage', getQuery);

module.exports = router;
