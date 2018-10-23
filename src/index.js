import React from 'react';
import ReactDOM from 'react-dom';
import PlanetList from './PlanetList';
import './styles.css';

import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import createSagaMiddleware from 'redux-saga';

// Import Reducers and Sagas
import reducer from './reducers';
import mySaga from './sagas';

// Create the middleware 🛠️
const sagaMiddleware = createSagaMiddleware();
// Create the store with middleware included
const store = createStore(reducer, applyMiddleware(sagaMiddleware));

// Run the saga 🏃
sagaMiddleware.run(mySaga);

// Render our App
function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <h1>Intoduction to Redux-Saga</h1>
        <PlanetList />
      </div>
    </Provider>
  );
}

// Render React to the DOM
const rootElement = document.getElementById('root');
ReactDOM.render(<App />, rootElement);
