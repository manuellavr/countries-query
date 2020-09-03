import React from 'react';
import './App.css';
import ApolloClient from 'apollo-boost';
import { ApolloProvider } from '@apollo/react-hooks';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import Countries from './components/Countries.js';
import CountryInfo from './components/CountryInfo.js';

function App() {

  const client = new ApolloClient({
      uri: 'https://countries.trevorblades.com/'
  });

  return (
    <ApolloProvider client={client}>
    <Router>
    <Switch>
      <Route path="/" exact component={Countries}/>
      <Route path="/country/:country" exact component={CountryInfo}/>  
    </Switch>
    </Router>
    </ApolloProvider>
  );
}

export default App;
