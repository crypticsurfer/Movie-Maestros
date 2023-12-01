const {Schema, model} = require('mongoose');
const bcrypt = require('bcrypt');
const Movie = require('./movie');

const userSchema = new Schema({
    username: {
        type: String,
        required: true,
        unique: true,
        trim: true,
    },
    email: {
        type: String,
        required: true,
        unique: true,
        match: [/.+@.+\..+/, 'please enter a valid email'],
    },
    password: {
        type: String,
        required: true,
        minlength: 8,
    },
    watchlist: [
        {
            type: Schema.Types.ObjectId,
            ref: 'Movie',
        },
    ],
});

userSchema.pre('save', async function (next) {
    const user = this;

    if (user.isModified('password')) {
        const salt = 10;
        user.password = await bcrypt.hash(user.password, salt);
    }

    next();
});

userSchema.methods.isCorrectPassword = async function (password) {
    return bcrypt.compare(password, this.password);
};

const User = model('User', userSchema);

module.exports = User;