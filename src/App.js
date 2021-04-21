import { ApolloProvider } from '@apollo/client';
import apolloClient from './services/apollo/apollo';
import Routes from './Routes/routes';

export default function App() {
  return (
      <ApolloProvider client={apolloClient}>
        <Routes/>
      </ApolloProvider>
  );
}
