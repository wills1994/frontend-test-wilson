import { createStore, combineReducers, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import dataReducer from './reducers/dataReducer';

//redux-thunk es una librería que nos permite
//realizar operaciones asincrónicas en nuestros action creators.

const initialState = {};

const middleware = [thunk];

const reducers = combineReducers({
  data: dataReducer,
});

const composeEnhancers =
  typeof window === 'object' && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
    ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({})
    : compose;
//Los enhancer son un complemento muy 
//interesante facilitan mucho el debug del store y state.
const enhancer = composeEnhancers(applyMiddleware(...middleware));
const store = createStore(reducers, initialState, enhancer);

export default store;