const mongoose = require('mongoose');

const applicationSchema = new mongoose.Schema({
    userId: {
        type: mongoose.Schema.Types.ObjectId,
        required: true,
        ref: 'User'
    },
    name: {
        type: String,
        required: true
    },
    gender: {
        type: String,
        enum: ['Male', 'Female', 'Other', 'Prefer not to say'],
        required: true
    },
    education: {
        type: String,
        required: true
    },
    category: {
        type: String,
        required: true
    },
    categoryDocument: {
        type: String, // Store URL or file path for the category document
        required: false
    },
    disability: {
        type: String,
        required: false
    },
    disabilityDocument: {
        type: String, // Store URL or file path for the disability document
        required: false
    },
    income: {
        type: Number,
        required: false
    },
    incomeDocument: {
        type: String, // Store URL or file path for the income document
        required: false
    },
    marksheet: {
        type: String, // Store URL or file path for the marksheet
        required: false
    },
    createdAt: {
        type: Date,
        default: Date.now
    }
});

const Application = mongoose.model('Application', applicationSchema);

module.exports = Application;
