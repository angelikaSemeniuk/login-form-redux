import React from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import { changeLogin, changePassword, handleSignIn} from "../actions";

class SignInFormContainer extends React.Component {
    render () {
        return (
            <div className="navigation">
                <Link to="/">Home</Link>
                <div className="signInForm">
                    {
                        this.props.failedSubmitOnSignInForm ?
                            <h4 style={{color: "red"}}>There is no such user, please sign up!</h4> :
                            <h2>Please enter your information</h2>
                    }
                    {
                        !this.props.fullUserInformation &&
                        <h4 style={{color: "red"}}>Fill the information in all fields</h4>
                    }
                    <form onSubmit={this.props.handleSignIn.bind(this)}>
                        <input type="text" value={this.props.login} onChange={this.props.changeLogin.bind(this)} placeholder="Login" />
                        <input type="password" value={this.props.password} onChange={this.props.changePassword.bind(this)} placeholder="Password" />
                        <input type="submit" value="Submit"/>
                        <Link to="/signupform">Sign Up</Link>
                    </form>
                </div>
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        login: state.login,
        password: state.password,
        fullUserInformation: state.fullUserInformation,
        failedSubmitOnSignInForm: state.failedSubmitOnSignInForm,
    }
};

const mapDispatchToProps = (dispatch) => {
    return {
        changeLogin: (event) => {
            dispatch(changeLogin(event.target.value));
        },
        changePassword: (event) => {
            dispatch(changePassword(event.target.value));
        },
        handleSignIn: (event) => {
            event.preventDefault();
            dispatch(handleSignIn());
        }
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(SignInFormContainer);