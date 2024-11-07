import { createStore, applyMiddleware } from "redux";
import createSagaMiddleware from "redux-saga";
import rootReducer from "../reducers";
import rootSaga from "../sagas";

// create saga middleware
const sagaMiddleWare = createSagaMiddleware();

// Mount saga middleware to newly created store
const store = createStore(rootReducer, applyMiddleware(sagaMiddleWare));

sagaMiddleWare.run(rootSaga);

export default store;

// import { configureStore } from '@reduxjs/toolkit'
// import createSagaMiddleware from 'redux-saga'

// import rootReducer from '../reducers';
// import rootSaga from '../sagas';

// // Create the saga middleware
// const sagaMiddleware = createSagaMiddleware()
// const middleware = [sagaMiddleware]
// // Mount it on the Store
// const store = configureStore({
//     rootReducer,
//   middleware: (getDefaultMiddleware) =>
//       getDefaultMiddleware().concat(middleware),
// })

// // Then run the saga
// sagaMiddleware.run(rootSaga);
// export default store;
