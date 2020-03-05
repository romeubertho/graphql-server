import {makeExecutableSchema} from 'graphql-tools';
import {resolvers} from './resolvers';

const typeDefs = `
type Question{
  _id: ID!
  title: String!
  answer1:String!
  answer2:String!
  answer3:String!
  answer4:String!
  answer5:String!
}

type Query{
getQuestion(_id:ID!):Question,
allQuestions:[Question!]!
}

input QuestionInput{
title: String!
answer1:String!
answer2:String!
answer3:String!
answer4:String!
answer5:String!
}

type Mutation{
createQuestion(input: QuestionInput) : Question,
updateQuestion(_id:ID!,input:QuestionInput):Question,
deleteQuestion(_id:ID!):Question
}

    `;
export const schema = makeExecutableSchema({
    typeDefs,
    resolvers
})