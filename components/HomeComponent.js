import React from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { handleSignOut } from "../actions";

const mapDispatchToProps = (dispatch) => {
    return {
        handleSignOut: () => {
            dispatch(handleSignOut())
        }
    }
}

class HomeComponent extends React.Component {
    render() {
        const authorized = JSON.parse(localStorage.getItem("authorized"));
        return(
            <div className="form-navigation">
                <Link to="/">Home</Link>
                {authorized ? (
                    <div className="form-navigation">
                        <p dangerouslySetInnerHTML={{__html: "Welcome, " + localStorage.getItem("currentUser")}}></p>
                        <button onClick={this.props.handleSignOut.bind(this)}>Sign out</button>
                    </div>
                ) : (
                    <Link to="/signupform">Sign Up</Link>
                )}
            </div>
        );
    }
}

export default connect(null, mapDispatchToProps)(HomeComponent);

