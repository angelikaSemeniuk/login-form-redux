const initialState = {fullName: "", login: "", password: "", submitOk: true, fullUserInformation: true, userAlreadyExist: false, failedSubmit: false, userAdded: false, userAuthorized: false, failedSubmitOnSignInForm: false};
const users = JSON.parse(localStorage.getItem("users"));

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case "CHANGE_USER_NAME": {
            return Object.assign({}, state, {
                fullName: action.value
            })
        }
        case "CHANGE_USER_LOGIN": {
            return Object.assign({}, state, {
                login: action.value
            })
        }
        case "CHANGE_USER_PASSWORD": {
            return Object.assign({}, state, {
                password: action.value
            })
        }
        case "CHECK_FOR_FULL_USER_INFORMATION": {
            if(state.fullName == "" || state.login == "" || state.password == "") {
                return Object.assign({}, state, {
                    submitOk: false,
                    fullUserInformation: false
                })
            } else {
                return Object.assign({}, state, {
                    submitOk: true,
                    fullUserInformation: true
                })
            }
        }

        case "CHECK_USER_AUTHORIZATION": {
            let userHasAuthorized = false;
            if(state.login == "" || state.password == "") {
                return Object.assign({}, state, {
                    fullUserInformation: false
                })
            } else {
                users.forEach((item) => {
                    if(item.login === state.login && item.password === state.password ) {
                        localStorage.setItem("authorized", true);
                        localStorage.setItem("currentUser", item.name);
                        userHasAuthorized = true;
                    }
                })
            }
            if(userHasAuthorized) {
                return Object.assign({}, state, {
                    fullUserInformation: true,
                    userAuthorized: true
                })
            } else {
                return Object.assign({}, state, {
                    login: "",
                    password: "",
                    failedSubmitOnSignInForm: true,
                    userAuthorized: false,
                })
            }
        }

        case "CHECK_IF_USER_EXIST": {
            let userExisting = false;
            users.forEach((item) => {
                if(state.login === item.login) {
                   userExisting = true;
                }
            })
            if (userExisting) {
                return Object.assign({}, state, {
                    fullName: state.fullName,
                    submitOk: false,
                    userAlreadyExist: true
                })
            } else {
                return Object.assign({}, state, {
                    userAlreadyExist: false
                })
            }
        }
        case "SUBMIT_ON_SIGNUP_FORM": {
            if(state.submitOk) {
                users.push({name: state.fullName, login: state.login, password: state.password});
                localStorage.setItem("users", JSON.stringify(users));
                localStorage.setItem("currentUser", state.fullName);
                localStorage.setItem("authorized", true);
                return Object.assign({}, state, {
                    fullName: "",
                    login: "",
                    password: "",
                    failedSubmit: false,
                    userAdded: true
                });
            } else {
                localStorage.setItem("authorized", false);
                return Object.assign({}, state, {
                    fullName: "",
                    login: "",
                    password: "",
                    failedSubmit: true
                });
            }
        }
        case "HANDLE_SIGN_OUT": {
            localStorage.setItem("authorized", false);
            return Object.assign({}, state, {
                fullName: "",
                login: "",
                password: "",
                userAdded: false,
                userAuthorized: false,
                failedSubmitOnSignInForm: false

            })
        }

        default:
            return state;
    }
}

export default reducer;