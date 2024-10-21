import React from 'react';
import { ApolloProvider } from '@apollo/client';
import client from './apolloClient';
import Leads from './components/Leads'; 

function App() {
  return (
    <ApolloProvider client={client}>
      <Leads />
    </ApolloProvider>
  );
}

export default App;
