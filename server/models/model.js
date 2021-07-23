const mongoose = require("mongoose");

const Schema = new mongoose.Schema({
    name: {
        type: String,
        required: [ true, "Name is required"],
        minlength: [ 3, "Name must be at least 3 characters long" ]
    },
    type: {
        type: String,
        required: [ true, "Type is required"],
        minlength: [ 3, "Type must be at least 3 characters long" ]
    },
    description: {
        type: String,
        required: [ true, "Description is required"],
        minlength: [ 3, "Description must be at least 3 characters long" ]
    },
    skills: {
        type: Array,
        validate: [arrayLimit, `Skills exceeds the limit of 3`]
    }

}, {timestamps: true});

function arrayLimit(val) {
    return val.length <= 3;
}

module.exports.Schema = mongoose.model("Schema", Schema);