const mongoose = require("mongoose");
const Schema   = mongoose.Schema;

const temaSchema = new Schema({
    moduloid:{type:Schema.Types.ObjectId,
        ref: 'modulo'
      },
    tema: String,
    //referenciaa modulo
  
}, {
  timestamps: { createdAt: "created_at", updatedAt: "updated_at" }
});

const Tema = mongoose.model('Tema', temaSchema);
module.exports = Tema;
