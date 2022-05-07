import React from 'react';
import { createRoot } from 'react-dom/client';
import { Provider } from 'react-redux';
import { store } from 'app/store';
import App from 'App';
import 'index.scss';

import reportWebVitals from 'reportWebVitals';
import {
  ApolloClient,
  InMemoryCache,
  ApolloProvider,
  // useQuery,
  // gql
} from '@apollo/client';

const container = document.getElementById('root')!;
const root = createRoot(container);

const client = new ApolloClient({
  cache: new InMemoryCache(),
  uri: process.env.REACT_APP_BACKEND,
});

root.render(
  <React.StrictMode>
    <ApolloProvider client={client}>
      <Provider store={store}>
        <App />
      </Provider>
    </ApolloProvider>
  </React.StrictMode>,
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
