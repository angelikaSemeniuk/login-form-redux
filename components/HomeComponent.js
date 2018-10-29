import React from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { handleSignOut } from "../actions";

class HomeComponent extends React.Component {
    render() {
        const authorized = JSON.parse(localStorage.getItem("authorized"));
        return(
            <div className="navigation">
                <Link to="/">Home</Link>
                {authorized ? (
                    <div className="form-navigation">
                        <p dangerouslySetInnerHTML={{__html: "Welcome, " + localStorage.getItem("currentUser")}}></p>
                        <button onClick={this.props.handleSignOut.bind(this)}>Sign out</button>
                    </div>
                ) : (
                    <div className="form-navigation">
                        <Link to="/signinform">Sign In</Link>
                        <Link to="/signupform">Sign Up</Link>
                    </div>
                )}
            </div>
        );
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        handleSignOut: () => {
            dispatch(handleSignOut())
        }
    }
};

export default connect(null, mapDispatchToProps)(HomeComponent);

