import {makeExecutableSchema} from 'graphql-tools';
import {resolvers} from './resolvers';

const typeDefs = `
type Question{
  _id: ID!
  title: String!
  answers:[Answer!]!
}

type Answer{
  _id: ID!
  answer: String!
}

type Query{
getQuestion(_id:ID!):Question,
allQuestions:[Question!]!,
}

input QuestionInput{
title: String!
}

input AnswerInput{
answer:String!
}

type Mutation{
createQuestion(input: QuestionInput) : Question,
addAnswer(_qid:ID!,input:AnswerInput):Answer
updateQuestion(_id:ID!,input:QuestionInput):Question,
updateAnswer(_id:ID!,input:AnswerInput):Answer,
deleteQuestion(_id:ID!):Question,
deleteAnswer(_id:ID!,_qid:ID!):Answer
}

    `;
export const schema = makeExecutableSchema({
    typeDefs,
    resolvers
})