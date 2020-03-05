import mongoose from 'mongoose';

const Schema = mongoose.Schema;

const QuestionSchema = new Schema({
    title: {
        type: String,
        required: true
    },
    answer1: {
        type: String,
        required: false
    },
    answer2: {
        type: String,
        required: false
    },
    answer3: {
        type: String,
        required: false
    },
    answer4: {
        type: String,
        required: false
    },
    answer5: {
        type: String,
        required: false
    },
    correct: {
        type: Number
    }
});
module.exports = mongoose.model('Question', QuestionSchema);