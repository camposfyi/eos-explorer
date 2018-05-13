import React from 'react';
import ReactDOM from 'react-dom';
import ApolloClient from 'apollo-client';
import {ApolloProvider} from 'react-apollo';
import { HttpLink } from 'apollo-link-http';
import { ApolloLink } from 'apollo-link';
import { InMemoryCache as Cache } from 'apollo-cache-inmemory';


import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';

const link = ApolloLink.from([
  new HttpLink({ uri: 'http://localhost:4000/graphql' }),
]);


const apolloClient = new ApolloClient({
  link,
  cache: new Cache().restore({}),
});

const Root = () => {
  return (
    <ApolloProvider client={apolloClient}>
      <App/>
    </ApolloProvider>
  );
};

ReactDOM.render(
  <Root/>,
  document.getElementById('root')
);

registerServiceWorker();
