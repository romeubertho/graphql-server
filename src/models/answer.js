import mongoose from 'mongoose';

const Schema = mongoose.Schema;

const AnswerSchema = new Schema({
    answer: {
        type: String,
        required: true
    }
});
module.exports = mongoose.model('Answer', AnswerSchema);