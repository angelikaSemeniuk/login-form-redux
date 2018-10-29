const initialState = {fullName: "", login: "", password: "", submitOk: true, fullUserInformation: true, userAlreadyExist: false, failedSubmit: false, userAdded: false};
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
                console.error("action-CHECK_FOR_FULL_USER_INFORMATION");
                return Object.assign({}, state, {
                    submitOk: true,
                    fullUserInformation: true
                })
            }
        }
        case "CHECK_IF_USER_EXIST": {
            console.error("action-CHECK_IF_USER_EXIST");
            let userExisting = false;
            users.forEach((item) => {
                if(state.login === item.login) {
                    console.error("action-cheking for existing user");
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
            console.error("action-submitOk SUBMIT_ON_SIGNUP_FORM", state.submitOk);
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
                userAdded: false
            })
        }

        default:
            return state;
    }
}

export default reducer;