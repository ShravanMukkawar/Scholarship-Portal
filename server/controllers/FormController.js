const Application = require('../models/form');
const cloudinary = require('../config/Cloudinaryconfig');
const fs = require('fs'); 

const uploadToCloudinary = async (filePath, folderName) => {
  try {
    const result = await cloudinary.uploader.upload(filePath, {
      folder: folderName,
    });
    return result.secure_url;
  } catch (error) {
    throw new Error('Failed to upload to Cloudinary: ' + error.message);
  }
};

const addApplication = async (req, res) => {
  try {
    // Validate required fields
    const { username, education, gender, disability, income, category } = req.body;
    if (!username || !education || !gender || !category) {
      return res.status(400).json({ error: 'All required fields must be provided.' });
    }

    const fileUrls = {};

    // Handle file uploads
    if (req.files.categoryDoc) {
      fileUrls.categoryDoc = await uploadToCloudinary(
        req.files.categoryDoc[0].path,
        'category_docs'
      );
      fs.unlinkSync(req.files.categoryDoc[0].path);
    }
    if (req.files.disabilityDoc) {
      fileUrls.disabilityDoc = await uploadToCloudinary(
        req.files.disabilityDoc[0].path,
        'disability_docs'
      );
      fs.unlinkSync(req.files.disabilityDoc[0].path);
    }
    if (req.files.incomeDoc) {
      fileUrls.incomeDoc = await uploadToCloudinary(
        req.files.incomeDoc[0].path,
        'income_docs'
      );
      fs.unlinkSync(req.files.incomeDoc[0].path);
    }
    if (req.files.marksheet) {
      fileUrls.marksheet = await uploadToCloudinary(
        req.files.marksheet[0].path,
        'marksheets'
      );
      fs.unlinkSync(req.files.marksheet[0].path);
    }

    const newApplication = new Application({
      username,
      education,
      gender,
      disability,
      income,
      category,
      categoryDocUrl: fileUrls.categoryDoc,
      disabilityDocUrl: fileUrls.disabilityDoc,
      incomeDocUrl: fileUrls.incomeDoc,
      marksheetUrl: fileUrls.marksheet,
    });

    await newApplication.save();

    res.status(201).json({ message: 'Application submitted successfully', application: newApplication });
  } catch (error) {
    res.status(500).json({ error: 'Failed to add application', details: error.message });
  }
};

module.exports = {
  addApplication,
};
