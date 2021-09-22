// TODO: Define Query and Mutation types
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
