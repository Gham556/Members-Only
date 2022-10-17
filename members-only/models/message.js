const mongoose = require('mongoose');
const Schema = mongoose.Schema

MessageScheama = new Schema ({
    message: {type: String},
    user: {type: Schema.Types.ObjectId, ref: "User", required: true}
});

module.exports = mongoose.model("Message", MessageScheama);