import { combineReducers } from 'redux';
import globalNavigationReducer from './globalNavigator';
import registerReducer from './register';

const appReducer = combineReducers({
    globalNavigator: globalNavigationReducer,
    register: registerReducer
});

export default appReducer;
