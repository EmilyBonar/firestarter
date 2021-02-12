import { gql } from "apollo-server-micro";

export const typeDefs = gql`
	type User {
		id: ID
		login: String
		name: String
		location: String
		description: String
		avatar_url: String
	}

	type Query {
		getUsers: [User]
		getUser(name: String!): User!
	}
`;
