import { createReducer } from '../utils/reducerUtil';
import {
    REGISTRATION_REQUEST,
    REGISTRATION_SUCCESS,
    REGISTRATION_FAILURE
} from '../constants';

const initialState = {
    isRegistering: false,
    statusText: null
}

export default createReducer(initialState, {
    [REGISTRATION_REQUEST]: (state, payload) => {
        return Object.assign({}, state, {
            isRegistering: true
        });
    },

    [REGISTRATION_SUCCESS]: (state, payload) => {
        return Object.assign({}, state, {
            isRegistered: true,
            statusText: 'Successfully Registered'
        });
    },

    [REGISTRATION_FAILURE]: (state, payload) => {
        return Object.assign({}, state, {
            statusText: 'something went wrong while registering you'
        });
    }
});