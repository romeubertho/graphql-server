import Question from '../models/question';
import Answer from '../models/answer';

export const resolvers = {
    Query: {
        async getQuestion(root, {_id}) {
            return await Question.findById(_id).populate('answers');
        },
        async allQuestions() {
            return await Question.find().populate('answers');
        }
    },
    Mutation: {
        async createQuestion(root, {input}) {
            let response;
            response = await Question.create(input);
            return await response;
        },
        async addAnswer(root, {_qid, input}) {
            let answer, question;
            answer = await Answer.create(input);
            question = await Question.findById(_qid);
            question.answers.push(answer._id);
            question.save();
            return answer;
        },
        async updateQuestion(root, {_id, input}) {
            return await Question.findOneAndUpdate({_id}, input, {new: true}).populate('answers');
        },
        async updateAnswer(root, {_id, input}) {
            return await Answer.findOneAndUpdate({_id}, input, {new: true});
        },
        async deleteQuestion(root, {_id}) {
            let question, answer;
            question = await Question.findByIdAndRemove({_id}).populate('answers');
            answer = await Answer.deleteMany({
                _id: {$in: question.answers}
            });
            return question;
        },
        async deleteAnswer(root, {_id, _qid}) {
            let answer, question;
            answer = await Answer.findByIdAndRemove({_id});
            question = await Question.findById(_qid);
            question.answers.pull(_id);
            question.save();
            return answer;
        }
    }
};