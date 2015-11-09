import { createStore, applyMiddleware, compose } from 'redux'
import thunk from 'redux-thunk'
import createLogger from 'redux-logger'
import rootReducer from '../reducers'

const finalCreateStore = compose(
    applyMiddleware(thunk),
    applyMiddleware(createLogger()),
)(createStore)


export default function configureStore(initialState) {
  return finalCreateStore(rootReducer, initialState)
}