import { applyMiddleware, createStore } from "redux";
import rootReducer from "./reducers";
import reduxThunk from "redux-thunk";
import rootSaga from "./saga"
import createSagaMiddleware from "redux-saga"
const sagaMiddleware = createSagaMiddleware()




const store = createStore(
    rootReducer,
    {},
    // applyMiddleware(sagaMiddleware)
    applyMiddleware(sagaMiddleware, reduxThunk)
)
sagaMiddleware.run(rootSaga)

export default store



// export default createStore(
//     rootReducer,
//     {},
//     applyMiddleware(sagaMiddleware, reduxThunk)
// );

// sagaMiddleware.run(rootSaga)