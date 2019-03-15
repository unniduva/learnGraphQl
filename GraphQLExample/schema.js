//import {makeExecutableSchema} from 'graphql-tools'
//const resolvers=require('./resolver')

const { gql } = require('apollo-server');
const typeDefs = gql`
type Book {
    id:String,
    name:String,
    author: String,
    year:String
}

type Query {
    books(year:String): [Book]
    book(id:String):Book
}

type Mutation {
    addBook(name: String!, author: String!, year: String!): Book
    deleteBook(id: String!): Book
    updateBook(id: String!, name: String!): Book
}
`;
//const schema = makeExecutableSchema({typeDefs, resolvers});
/* module.exports={typeDefs,schema}  */ 

module.exports={typeDefs}





/* 
const typeDefs = `type Author {
    id: String
    age: Int
    name: String
    books: [String]
}
type Query {
    authors(age: Int): [Author]
    author(id: String): Author
}
type Mutation {
    addAuthor(name: String!, age: Int!, books: [String]!): Author
    deleteAuthor(id: String!): Author
    updateAuthor(id: String!, name: String!): Author
}
`;  */