import mongoose from 'mongoose';

const Schema = mongoose.Schema;

const AnswerSchema = new Schema({
    quid: {
        type: Number,
        ref: 'Question'
    },
    answer: {
        type: String,
        required: true
    }
});
module.exports = mongoose.model('Answer', AnswerSchema);