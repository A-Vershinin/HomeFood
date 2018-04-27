import { createStore, applyMiddleware  } from 'redux';
import { routerReducer, routerMiddleware } from 'react-router-redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import rootReducer from './reducers';


const configureStore = (history) => {

  const middlewares = [
    routerMiddleware(history),
  ];

  const store = createStore(
    rootReducer,
    composeWithDevTools(
       applyMiddleware(...middlewares)
    ),
  );

  return store;
};

export default configureStore;
