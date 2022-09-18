const express = require("express");
const { graphqlHTTP } = require("express-graphql");
const cors = require("cors")
var app = express();

app.use(cors());
app.use(express.json());


// Schema
const  schema  = require("./schema");

// Root resolver
const {getByGender,getById,updateAddress,insertData} = require("./resolvers")

var root = {
  users: getByGender,
  user: getById,
  updateAddress:updateAddress,
  insertData:insertData
}; 

// GraphQL endpoint
app.use(
  "/graphql",
  graphqlHTTP({
    schema: schema,
    rootValue: root,
    graphiql: true,
  })
);

app.listen(5000, () => console.log("sever running port: 5000"));

/*
query in frontend

const response = await fetch('http://localhost:5000/graphql', {
  method: 'POST',
  headers: {
    'Content-Type': 'application/json',
  },
  body: JSON.stringify({
    query: `{
                users{
                    id
                    first_name
                    last_name
                    phone_no
                }
            }`,
  }),
})
const data = await response.json()
*/
