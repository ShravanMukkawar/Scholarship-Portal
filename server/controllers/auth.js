const User = require('../models/user.model.js');
const errorHandler = require('../utils/error.js');
const jwt = require('jsonwebtoken');
const bcryptjs = require('bcryptjs');

// Signup function
const signup = async (req, res, next) => {
    const { username, email, password } = req.body;

    try {
        const existingUser = await User.findOne({ email });
        if (existingUser) {
            return next(errorHandler(400, 'Email already in use'));
        }

        const hashedPassword = bcryptjs.hashSync(password, 10);
        const newUser = new User({ username, email, password: hashedPassword });

        await newUser.save();
        res.status(201).json("User created successfully");
    } catch (error) {
        next(error);
    }
};

// Signin function
const signin = async (req, res, next) => {
    const { email, password } = req.body;

    try {
        const validUser = await User.findOne({ email });
        if (!validUser) {
            return next(errorHandler(404, 'User not found'));
        }

        const validPassword = await bcryptjs.compare(password, validUser.password);
        if (!validPassword) {
            return next(errorHandler(401, "Wrong credentials!"));
        }

        const token = jwt.sign({ id: validUser._id }, process.env.JWT_SECRET, { expiresIn: '1h' });
        const { password: pass, ...rest } = validUser._doc;
        console.log(token)
        console.log(validUser)

        res
            .cookie('access_token', token, { httpOnly: true, secure: process.env.NODE_ENV === 'production', sameSite: 'Strict' })
            .status(200)
            .json({
                data:rest,token
            });
    } catch (error) {
        next(error);
    }
};

// Google authentication function
const google = async (req, res, next) => {
    try {
        const user = await User.findOne({ email: req.body.email });
        if (user) {
            const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET, { expiresIn: '1h' });
            const { password: pass, ...rest } = user._doc;
            res
                .cookie('access_token', token, { httpOnly: true, secure: process.env.NODE_ENV === 'production', sameSite: 'Strict' })
                .status(200)
                .json(rest);
        } else {
            const generatedPassword = Math.random().toString(36).slice(-8) + Math.random().toString(36).slice(-8);
            const hashedPassword = bcryptjs.hashSync(generatedPassword, 10);
            const newUser = new User({
                username: req.body.name.split(' ').join('').toLowerCase() + Math.random().toString(36).slice(-4),
                email: req.body.email,
                password: hashedPassword,
            });
            await newUser.save();
            const token = jwt.sign({ id: newUser._id }, process.env.JWT_SECRET, { expiresIn: '1h' });
            const { password: pass, ...rest } = newUser._doc;
            res
                .cookie('access_token', token, { httpOnly: true, secure: process.env.NODE_ENV === 'production', sameSite: 'Strict' })
                .status(200)
                .json(rest);
        }
    } catch (error) {
        next(error);
    }
};

module.exports = { signup, signin, google };