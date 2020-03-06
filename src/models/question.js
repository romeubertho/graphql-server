import mongoose from 'mongoose';

const Schema = mongoose.Schema;

const QuestionSchema = new Schema({
    title: {
        type: String,
        required: true
    },
    answers: [{
        type: Schema.Types.ObjectID,
        ref: 'Answer'
    }],
    correct: [{
        type: Schema.Types.ObjectID,
        ref: 'Answer'
    }]
});
module.exports = mongoose.model('Question', QuestionSchema);