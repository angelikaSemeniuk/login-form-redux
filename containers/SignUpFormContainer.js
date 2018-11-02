import React from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import {changeName, changeLogin, changePassword, handleSubmitOnSignUpForm, handleActionForSigUpComponent} from "../actions";

class SignUpFormContainer extends React.Component {
    constructor(props) {
        super(props);
    }

    componentWillUnmount() {
        this.props.handleActionForSigUpComponent();
    }

    render() {
        return(
            <div className="navigation-in-form">
                <Link to="/">Home</Link>
                <div className="signUpForm">
                    {this.props.failedSubmit ?
                        <h4>Opps, something went wrong</h4> :
                        <h2>Please enter your information</h2>}
                    {
                        !this.props.fullUserInformation &&
                        <h4 style={{color: "red"}}>Fill the information in all fields</h4>
                    }
                    {
                        this.props.userAlreadyExist &&
                        <h4 style={{color: "red"}}>User with this login already exist. Please try another one</h4>
                    }
                    <form onSubmit={this.props.handleSubmitOnSignUpForm.bind(this)}>
                        <input type="text" value={this.props.fullName} onChange={this.props.changeName.bind(this)} placeholder="Full name" />
                        <input type="text" value={this.props.login} onChange={this.props.changeLogin.bind(this)} placeholder="Login" />
                        <input type="password" value={this.props.password} onChange={this.props.changePassword.bind(this)} placeholder="Password" />
                        <input type="submit" value="Submit"/>
                    </form>
                </div>
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    return{
        fullName: state.fullName,
        login: state.login,
        password: state.password,
        submitOk: state.submitOk,
        failedSubmit: state.failedSubmit,
        fullUserInformation: state.fullUserInformation,
        userAlreadyExist: state.userAlreadyExist,
    }
};

const mapDispatchToProps = (dispatch) => {
    return{
        changeName: (event) => {
            dispatch(changeName(event.target.value));
        },
        changeLogin: (event) => {
            dispatch(changeLogin(event.target.value));
        },
        changePassword: (event) => {
            dispatch(changePassword(event.target.value))
        },
        handleSubmitOnSignUpForm: (event) => {
            event.preventDefault();
            dispatch(handleSubmitOnSignUpForm());
        },
        handleActionForSigUpComponent: () => {
            dispatch(handleActionForSigUpComponent());

        }
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(SignUpFormContainer);