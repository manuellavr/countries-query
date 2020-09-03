import React from 'react';
import './App.css';
import ApolloClient from 'apollo-boost';
import { ApolloProvider } from '@apollo/react-hooks';
import Countries from './components/Countries.js'

function App() {

  const client = new ApolloClient({
      uri: 'https://countries.trevorblades.com/'
  });

  return (
    <ApolloProvider client={client}>
    <div className="App">
      <Countries />
    </div>
    </ApolloProvider>
  );
}

export default App;
