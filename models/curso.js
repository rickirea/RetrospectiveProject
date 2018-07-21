const mongoose = require("mongoose");
const Schema   = mongoose.Schema;

const cursoSchema = new Schema({
  curso: String,
  userid: [{Type: Schema.Types.ObjectId,
  ref: 'user'
  }], 
  
}, {
  timestamps: { createdAt: "created_at", updatedAt: "updated_at" }
});

const Curso = mongoose.model("Curso", cursoSchema);
module.exports = Curso;