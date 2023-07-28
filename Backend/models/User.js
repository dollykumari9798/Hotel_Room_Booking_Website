const mongoose = require("../config.js");

const UserSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
    },
    email: {
        type: String,
        required: true,
        unique: true,
        lowercase: true,
    },
    mob: {
        type: Number,
        required: true,
    },
    address: {
        type: String,
        required: false,
    },
    country: {
        type: String,
        required: false,
    },
    password: {
        type: String,
        required: true,
    },
    profileImage: {
        data: Buffer, 
        contentType: String,
    },
});

// fire the function after saving the data in the db
UserSchema.post("save", function (doc, next) {
    console.log("new user was created and saved", doc);
    next();
});

const User = mongoose.model("user", UserSchema);

module.exports = User;
