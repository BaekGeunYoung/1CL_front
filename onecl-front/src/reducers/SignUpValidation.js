import * as types from '../actions/Signup/ActionTypes'

const initialState = {
    idIsValid: 0,
    emailIsValid: 0,
    emailSended: 0
}

const SignUpValidation = (state=initialState, action) => {
    switch (action.type) {
        case types.ID_VALIDATION:
            return {
                ...state,
                idIsValid: action.status
            };
        case types.EMAIL_VALIDATION:
            return {
                ...state,
                emailIsValid: action.status
            };
        case types.EMAIL_SENDED:
            return {
                ...state,
                emailSended: action.status
            };
        default:
            return state;
    }
}

export default SignUpValidation;
