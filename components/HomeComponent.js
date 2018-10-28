import React from "react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";

export default class HomeComponent extends React.Component {
    render() {
        return(
            <div className="form-navigation">
                <Link to="/signupform">Sign Up</Link>
            </div>
        );
    }

}