const mongoose = require ("mongoose");
const Schema = mongoose.Schema;

const postitSchema = new Schema ({
    userid: [{Type: Schema.Types.ObjectId,
        //ref: 'user'
        }],
        //ref modulo
    moduloid:[{Type:  Schema.Types.ObjectId,
        ref: 'modulo'
    }], 
    coment: String,   
    stage:{
        type: String,
        enum: ['stop','start','stay','domore','doless'],
    
    },
    }, {
        timestamps: { createdAt: "created_at", updatedAt: "updated_at" }    
});


const Postit = mongoose.model("Postit", postitSchema);
module.exports = Postit;
