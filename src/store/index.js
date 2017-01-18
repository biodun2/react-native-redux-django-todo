import { createStore, compose, applyMiddleware } from 'redux';
import createLogger from 'redux-logger';
import thunk from 'redux-thunk';
import appReducer from '../reducers';

export default function configureStore() {
    const middleware = applyMiddleware(thunk, createLogger());
    const createStoreWithMiddleware = compose(middleware);
    return createStoreWithMiddleware(createStore)(appReducer);
}

// export default function configureStore() {
//     const enhancer = compose(
//         applyMiddleware(
//             thunk,
//             createLogger()
//         )
//     );

//     return createStore(appReducer, enhancer);
// }