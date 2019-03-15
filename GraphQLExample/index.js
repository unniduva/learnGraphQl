const { ApolloServer, gql } = require('apollo-server');
const {typeDefs}=require('./schema')
const {resolvers}=require('./resolver')
const mongoose= require('mongoose')

mongoose.connect('mongodb://localhost/GraphQLBooks');

const connection = mongoose.connection;

connection.once('open', () => {
    console.log('connection to database was successful!')
});

const server = new ApolloServer({ typeDefs, resolvers });

server.listen().then(({ url }) => {
    console.log(`Server ready at ${url}`);
  });