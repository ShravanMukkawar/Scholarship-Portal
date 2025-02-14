// models/Contact.js
const mongoose = require('mongoose');

const contactSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
        trim: true
    },
    email: {
        type: String,
        required: true,
        trim: true,
        lowercase: true
    },
    message: {
        type: String,
        required: true,
        trim: true
    }
}, {
    timestamps: true // Adds createdAt and updatedAt fields
});

const Contact = mongoose.model('Contact', contactSchema);

module.exports = Contact;
