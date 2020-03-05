import {buildSchema} from "graphql";

export var schema = buildSchema(`
  type Query {
  allPersons(last: Int): [Person!]!
}

type Mutation {
  createPerson(name: String!, age: Int!): Person!
}

type Subscription {
  newPerson: Person!
}

type Person {
  name: String!
  age: Int!
  posts: [Post!]!
}

type Post {
  title: String!
  author: Person!
}
`);

// The root provides a resolver function for each API endpoint
export var root = {
    hello: () => {
        return 'Hello world!';
    },
};