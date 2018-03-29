'use strict';
var mongoose = require('mongoose');
var Schema = mongoose.Schema;
// tao cau truc bang
var ServantSchema = new Schema({
    name: {
        type: String,
        // not null
        required: true
    },
    class: {
        type: String,
        default: ""
    },
    created_date: {
        type: Date,
        default: Date.now
    },
    // co san hay ko co san
    status: {
        type: [{
            type: String,
            enum: ['rated up', 'not rate up']
        }],
        default: ['rated up']
    },
    // Same khoa ngoai toi category
    categoryId: Schema.ObjectId,
    imageUrl: {
        type: String
    }
});

// a setter
// khi truong nam duoc gan gia tri lam gi do roi moi Insert vao csdl
ServantSchema.path('name').set( (inputString) => {
    // viet hoa chu cai dau tien
    return inputString[0].toUpperCase() + inputString.slice(1);
});
module.exports = mongoose.model('Servant', ServantSchema);