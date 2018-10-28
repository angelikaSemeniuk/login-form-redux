import React from "react";
import { connect } from "react-redux";

const mapStateToProps = (state) => {
    return{
        fullName: state.fullName,
        login: state.login,
        password: state.password,
        submitOk: state.submitOk
    }
}

class SignUpFormContainer extends React.Component {
    render() {
        return(
            <div className="signUpForm">
                <h4>Please enter your information</h4>
                <form>
                    <input type="text" value={this.state.fullName} onChange={this.changeName.bind(this)} placeholder="Full name" />
                    <input type="text" value={this.state.login} onChange={this.changeLogin.bind(this)} placeholder="Login" />
                    <input type="password" value={this.state.password} onChange={this.changePassword.bind(this)} placeholder="Password" />
                    <input type="submit" value="Submit"/>
                </form>

            </div>
        );
    }
}

export default connect(mapStateToProps)(SignUpFormContainer);