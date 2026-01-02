import PropTypes from "prop-types";

function UserGreeting(props){
    if(props.isLoggedIn)
    {
        return <h1 className = "welcome-message">Welcome back, {props.userName}!</h1>;
    }
    else{
        return <h1 className = "signup-message">Please sign up.</h1>
    }
}

UserGreeting.propTypes = {
    isLoggedIn : PropTypes.bool,
    userName : PropTypes.string,
}

export default UserGreeting;