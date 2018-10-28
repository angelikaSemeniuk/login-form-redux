import React from "react";
import { BrowserRouter as Router, Route} from "react-router-dom";
import SignUpFormContainer from "../containers/SignUpFormContainer";
import HomeComponent from "../components/HomeComponent";

export default class TestApp extends React.Component {

    render () {
        const initialUsers = [];
        if (!localStorage.getItem("users")) {
            localStorage.setItem("users", JSON.stringify(initialUsers));
        }
        return (
            <Router>
                <div>
                    <Route exact path="/" component={HomeComponent}/>
                    <Route exact path="/signupform" component={SignUpFormContainer}/>
                </div>
            </Router>
        );
    }
}