import { GraphQLModule } from '@nestjs/graphql';
import { join } from 'path';
import { ApolloDriver, ApolloDriverConfig } from '@nestjs/apollo';
import { Request } from 'express';

export const graphQlConfiger = GraphQLModule.forRootAsync<ApolloDriverConfig>({
  driver: ApolloDriver,
  useFactory: () => ({
    autoSchemaFile: join(process.cwd(), 'src/schema.gql'),
    context: ({ req }: { req: Request }) => ({ req }),
    graphiql: true,
  }),
});
