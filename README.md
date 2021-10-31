# DID GraphQL Scalars

DID GraphQL Scalars defines custom GraphQL scalars for DID.

This library is influenced by [GraphQL Scalars](https://github.com/Urigo/graphql-scalars) .
Thank you for the awesome library.

## Getting started

### 1. Installation

```shell
$ npm install --save-dev did-graphql-scalars
```

### 2. SDL type definitions

```graphql
scalar ScalarName
```

```typescript
import { typeDefs as didScalarsTypeDefs } from 'did-graphql-scalars';

const typeDefs = [
  ...didScalarsTypeDefs,
  // other typeDefs
];
```

### 3. Adding Resolvers

```typescript
import { resolvers as didScalarResolvers } from 'did-graphql-scalars';

const resolvers = [
  ...didScalarResolvers,
  // other resolvers
];
```
