const { gql } = require("apollo-server");

const typeDefs = gql`
  type Author {
    id: ID!
    name: String!
    photo: String
  }

  type Module {
    id: ID!
    title: String!
    length: Int
  }

  type Track {
    id: ID!
    title: String!
    author: Author!
    thumbnail: String
    length: Int
    modulesCount: Int
    description: String
    numberOfViews: Int
    modules: [Module!]!
  }

  type Query {
    tracksForHome: [Track!]!
    track(id: ID!): Track!
  }
`;

module.exports = typeDefs;
