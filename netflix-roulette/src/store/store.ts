import { createStore, applyMiddleware } from "redux";
import createSagaMiddleware from "redux-saga";
import { rootSaga } from "./sagas";
import { rootReducer } from "./reducers";
import { composeWithDevTools } from "redux-devtools-extension";

const sagaMiddleware = createSagaMiddleware();

const composedEnhancers = composeWithDevTools(applyMiddleware(sagaMiddleware));
const store = createStore(rootReducer, composedEnhancers);

sagaMiddleware.run(rootSaga);

export default store;
