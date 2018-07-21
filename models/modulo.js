const mongoose = require("mongoose");
const Schema   = mongoose.Schema;

const moduloSchema = new Schema({
  modulo: String, //uno 

}, {
  timestamps: { createdAt: "created_at", updatedAt: "updated_at" }
});

const Modulo = mongoose.model("Modulo", moduloSchema);
module.exports = Modulo;