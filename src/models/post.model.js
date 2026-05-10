const mongoose = require("mongoose");
const postModel = new mongoose.Schema({
    title: {
        type: String,
        required: true,
        unique: true,
    },
    content: {
        type: String,
        required: true,
    },
    author: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User",
    }
},

    {
        timestamps: true,
    },
)
module.exports = mongoose.model("Post",postModel)
