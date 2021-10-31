import { GraphQLDID } from "./scalars";

export { GraphQLDID as DIDResolver };

// All Resolvers
export const resolvers = {
	DID: GraphQLDID,
};

// Schemas
export { DID as DIDefinition } from "./typeDefs";

// All Schemas
export { typeDefs } from "./typeDefs";

export { GraphQLDID };
