import Question from '../models/question';
import Answer from '../models/answer';

export const resolvers = {
    Query: {
        async getQuestion(root, {_id}) {
            return await Question.findById(_id);
        },
        async allQuestions() {
            return await Question.find();
        }
    },
    Mutation: {
        async createQuestion(root, {input}) {
            let response;
            response = await Question.create(input);
            console.log(response._id);
            return await response;
        },
        async updateQuestion(root, {_id, input}) {
            return await Question.findOneAndUpdate({_id}, input, {new: true});
        },
        async deleteQuestion(root, {_id}) {
            return await Question.findOneAndRemove({_id});
        }
    }
};