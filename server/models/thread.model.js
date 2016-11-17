const mongoose = require('mongoose');
const AutoIncrement = require('mongoose-sequence');

let threadSchema = new mongoose.Schema({
    threadId: {
        type: Number
    },
    title: {
        type: String
    },
    content: {
        type: String,
        required: true
    },
    comment: {
        type: Array
    }
}, {
    timestamps: true
});

threadSchema.plugin(AutoIncrement, { inc_field: 'threadId' });

module.exports = mongoose.model('Thread', threadSchema);
