const express = require('express');
const { addApplication } = require('../controllers/FormController');
const multer = require('multer');

const router = express.Router();
const upload = multer({ dest: 'uploads/' });

// Route for uploading application details along with documents
router.post(
  '/register',
  upload.fields([
    { name: 'categoryDoc', maxCount: 1 },
    { name: 'disabilityDoc', maxCount: 1 },
    { name: 'incomeDoc', maxCount: 1 },
    { name: 'marksheet', maxCount: 1 },
  ]),
  addApplication
);

module.exports = router;
