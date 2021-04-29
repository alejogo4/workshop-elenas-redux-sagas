import createSagaMiddleware from 'redux-saga'
import { createLogger } from 'redux-logger'
import { createStore, applyMiddleware } from 'redux'
import rootReducer from './reducers';
import rootSaga from './sagas'

const sagaMiddleware = createSagaMiddleware();
const loggerMiddleware = createLogger();

const middlewares = [sagaMiddleware,loggerMiddleware];


export default store = createStore(
  rootReducer,
  applyMiddleware(...middlewares)
)

sagaMiddleware.run(rootSaga)


