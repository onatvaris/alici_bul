import * as React from 'react';
import {Provider} from 'react-redux';
import {applyMiddleware, createStore} from 'redux';
import ReduxThunk from 'redux-thunk';
import Router from './Router';
import Reducers from './Reducers';
import {ApolloProvider} from '@apollo/client';
import {client} from './Graphql/Apollo/client';
import 'react-native-gesture-handler';
import {View} from 'react-native';

const App = () => {
  const store = createStore(Reducers, {}, applyMiddleware(ReduxThunk));
  return (
    <Provider store={store}>
      <ApolloProvider client={client}>
        <Router />
      </ApolloProvider>
    </Provider>
  );
};

export default App;
