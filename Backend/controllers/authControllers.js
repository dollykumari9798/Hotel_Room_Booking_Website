const User = require("../models/User");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");

const maxAge = 3 * 24 * 60 * 60;

const createToken = (id) => {
    return jwt.sign({ id }, "dolly123", { expiresIn: maxAge });
};

module.exports.signup_post = async (req, res) => {
    const salt = await bcrypt.genSalt();
    const newUser = req.body;
    newUser.password = await bcrypt.hash(newUser.password, salt);
    try {
        const user = await User.create(newUser);
        const token = createToken(user._id);
        console.log(token);
        res.status(201).json({ token: token });
    } catch (err) {
        // const errors= handleErrors(err);
        console.log(err);
    }
};
module.exports.login_post = async (req, res) => {
    const { email, password } = req.body;
    try {
        const user = await User.findOne({ email });
        if (!user) {
            console.log("not found");
            res.send({ error: "Invalid email" });
            return;
        }
        const isPasswordValid = await bcrypt.compare(password, user.password);
        if (!isPasswordValid) {
            res.send({ error: "Invalid password" });
        } else {
            const token = createToken(user._id);
            res.send({ token: token });
        }
    } catch (err) {
        // const errors = handleErrors(err);
        res.send({ error: err.message });
    }

    // res.send('userLogin');
};
