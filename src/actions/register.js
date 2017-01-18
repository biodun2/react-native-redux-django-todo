import { 
    REGISTRATION_REQUEST,
    REGISTRATION_SUCCESS,
    REGISTRATION_FAILURE,
    SERVER_URL
} from '../constants'
import { checkHttpStatus } from '../utils/ApiUtils';
import md5 from 'blueimp-md5';

export function authRegisterRequest() {
    return {
        type: REGISTRATION_REQUEST
    }
}

export function authRegisterSuccess(user) {
    return {
        type: REGISTRATION_SUCCESS,
        payload: {
            user
        }
    }
}

export function authRegisterUser(payload) {
    return (dispatch) => {
        dispatch(authRegisterRequest);
        return fetch(`${SERVER_URL}/api/user/add/`, {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                username: payload.username,
                email: payload.email,
                password: md5(payload.password)
            })
        })
            .then((response) => {
                dispatch(authRegisterSuccess(response.user))
            })
            .catch(error => {
                console.log(error)
            })

    }
}