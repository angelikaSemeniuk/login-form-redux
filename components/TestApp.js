import React from "react";
import { BrowserRouter as Router, Route, Redirect} from "react-router-dom";
import { connect } from "react-redux";
import SignUpFormContainer from "../containers/SignUpFormContainer";
import SignInFormContainer from "../containers/SignInFormContainer";
import HomeComponent from "../components/HomeComponent";

const mapStateToProps = (state) => {
    console.error("action-inTestApp- userAuthorized", state.userAuthorized)
    return {
        userAdded: state.userAdded,
        userAuthorized: state.userAuthorized
    }
}
class TestApp extends React.Component {

    render () {
        const initialUsers = [];
        if (!localStorage.getItem("users")) {
            localStorage.setItem("users", JSON.stringify(initialUsers));
        }
        return (
            <Router>
                <div>
                    <Route exact path="/" component={HomeComponent}/>
                    <Route exact path="/signinform"
                           render = {()=> (
                               this.props.userAuthorized ? (
                                   <Redirect to="/"/>
                               ) : (
                                   <SignInFormContainer/>
                               )
                           )}

                    />
                    <Route exact path="/signupform"
                           render={ () => (
                               this.props.userAdded ? (
                                   <Redirect to="/"/>
                               ) : (
                                   <SignUpFormContainer/>
                               ))}/>
                </div>
            </Router>
        );
    }
}

export default connect(mapStateToProps)(TestApp)

