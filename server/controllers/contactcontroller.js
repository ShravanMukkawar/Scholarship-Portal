const Contact = require('../models/Contact');

exports.sendQuery = async (req, res) => {
    const { name, email, message } = req.body;

    try {
        const newContact = new Contact({
            name,
            email,
            message
        });

        await newContact.save();

        res.status(201).json({ message: 'Query sent successfully' });
    } catch (error) {
        res.status(500).json({ message: 'Server error, please try again later', error: error.message });
    }
};

exports.getQuery = async (req, res) => {
    try {
        const contacts = await Contact.find();
                            
        res.status(200).json(contacts);
    } catch (error) {
        res.status(500).json({ message: 'Server error, please try again later', error: error.message });
    }
};
