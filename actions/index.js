export function changeName(value) {
    return {
        type: "CHANGE_USER_NAME",
        value: value
    }
}

export function changeLogin(value) {
    return {
        type: "CHANGE_USER_LOGIN",
        value: value

    }
}

export function changePassword(value) {
    return {
        type: "CHANGE_USER_PASSWORD",
        value: value
    }
}

export function handleSubmitOnSignUpForm() {
    return function (dispatch) {
        dispatch({type: "CHECK_FOR_FULL_USER_INFORMATION"});
        dispatch({type: "CHECK_IF_USER_EXIST"});
        dispatch({type: "SUBMIT_ON_SIGNUP_FORM"});
    }
}

export function handleSignOut() {
    return { type: "HANDLE_SIGN_OUT" }
}

export function handleSignIn() {
    console.error("action-handleSignIn");
    return { type: "CHECK_USER_AUTHORIZATION" }
}