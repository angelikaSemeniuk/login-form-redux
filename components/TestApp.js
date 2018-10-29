import React from "react";
import { BrowserRouter as Router, Route, Redirect} from "react-router-dom";
import { connect } from "react-redux";
import SignUpFormContainer from "../containers/SignUpFormContainer";
import HomeComponent from "../components/HomeComponent";

const mapStateToProps = (state) => {
    console.error("action-inTestApp- userAdded", state.userAdded)
    return {
        userAdded: state.userAdded
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

