const mongoose = require("mongoose");
const { Schema } = mongoose;

const UsersSchema = new Schema({
  firstName: { type: String, required: true },
  lastName: { type: String, required: true },
});

module.exports = mongoose.model("users", UsersSchema);
