const mongoose = require("mongoose");
const Schema   = mongoose.Schema;

const userSchema = new Schema({
  username: String,
  password: String,
  facebookID: String,
  role: {
    type:String,
    enum:['BOSS','STUDENT'],
    default:'STUDENT'
  },
  curso: {
    type: String,
    enum:['Web Development Part-Time','Web Development Full-Time','NONE'],
    default:'NONE'
  }
}, {
  timestamps: { createdAt: "created_at", updatedAt: "updated_at" }
});

const User = mongoose.model("User", userSchema);
module.exports = User;