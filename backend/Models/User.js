// const mongoose = require('mongoose');
// const Schema = mongoose.Schema;

// const UserSchema = new Schema({
//     name: {
//         type: String,
//         required: true,
//     },
//     email: {
//         type: String,
//         required: true,
//         unique: true
//     },
//     password: {
//         type: String,
//         required: true,
//     }
// });

// const UserModel = mongoose.model('users', UserSchema);
// module.exports = UserModel;

const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// Define the User schema with conditions based on user type
const UserSchema = new Schema({
    name: {
        type: String,
        required: true,
    },
    email: {
        type: String,
        required: true,
        unique: true
    },
    password: {
        type: String,
        required: true,
    },
    userType: {
        type: String,
        required: true,
        enum: ['user', 'admin'], // Only 'user' or 'admin' as valid values
        default: 'user', // Default to 'user' if not specified
    },
    // No need to store the secret key in the database, as it's only used for validation in the frontend
});

const UserModel = mongoose.model('users', UserSchema);

module.exports = UserModel;
