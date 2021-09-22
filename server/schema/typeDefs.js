// TODO: Define Query and Mutation types
const { gql } = require("apollo-server-express");

const typeDefs = gql`
  type Book {
    _id: ID
    authors: [String]
    description: String
    bookId: String
    image: String
    link: String
    title: String
  }
  type User {
    _id: ID
    username: String
    email: String
    bookCount: Int
    savedBooks: [Book]
  }
  type Auth {
    token: ID!
    user: User
  }
  type Query {
    me: User
  }
  input SavedBookInput {
    authors: [String]
    description: String
    bookId: String
    image: String
    forSale: String
    link: String
    title: String
  }
  type Mutation {
    login(email: String!, password: String!): Auth
    addUser(username: String!, email: String!, password: String!): Auth
    saveBook(book: SavedBookInput): User
    removeBook(bookId: String!): User
  }
`;

module.exports = typeDefs;

// Query:
//------- me: returns a User type
// Mutation:
//------- login: accepts email and password as params, returns an Auth type
//------- addUser: accepts email, user, password; returns an Auth
//------- saveBook: accepts book author's array, description, title, bookId, image, and link as params, returns a User type (look into an "input" type to handle all params)
//------- removeBook: accepts bookId as a param, returns a User type

//User type:
//--- id
//--- username
//--- email
//--- bookCount
//--- savedBooks (array of Book type)

//Book type:
//--- bookId
//--- authors (array of strings)
//--- descriptions
//--- title
//--- image
//--- link

//Auth type:
//--- token
//--- user (references User type)
