import { LOADING_UI, LOADING_USER, SET_ERRORS, CLEAR_ERRORS } from './types';

const loadingUI = () => ({
    type: LOADING_UI
});

const loadingUser = () => ({
    type: LOADING_USER
});

const setErrors = (error) => ({
    type: SET_ERRORS,
    payload: error.message
})
const clearErrors = () => ({
    type: CLEAR_ERRORS
})

export { loadingUI, loadingUser, setErrors, clearErrors };