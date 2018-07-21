const mongoose = require ("mongoose");
const Schema = mongoose.Schema;

const postSchema = new Schema ({
    userid: [{Type: Schema.Types.ObjectId,
        ref: 'user'
        }],  
})