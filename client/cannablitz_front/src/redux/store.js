import { createStore, applyMiddleware, compose, combineReducers } from 'redux';
import thunk from 'redux-thunk';
import authReducer from './authReducer';
import saveUserReducer from './saveUserReducer';

const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const rootReducer = combineReducers({
  'save': saveUserReducer,
  'auth': authReducer,
  'product': 'productReducer'
})

const store = createStore(
  rootReducer,
  composeEnhancer(applyMiddleware(thunk)) 
);

export default store;
