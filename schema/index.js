const { buildSchema } = require("graphql"); // GraphQL schema

const schema = buildSchema(`
type user {
  id: ID!
  first_name: String
  last_name: String
  email: String
  gender: String
  phone_no: String
  address: String
}

type Mutation{
    updateAddress(id:Int!,address:String!): user,
    insertData(first_name:String!,last_name:String!,email:String!,gender:String!,phone_no:String!,address:String!):[user]
}

type Query {
  users(gender: String): [user]
  user(id: Int): user

}
`);
module.exports = schema;