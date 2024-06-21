import PropsTypes from 'prop-types';



function UserGreeting(props){
    //method 1
    // if(props.isLoggedIn){
    //     return <h2>Welcome {props.username}</h2>
    // }
    // else{
    //     return <h2>Plese log in to continue</h2>
    // }

   //terner oprator...
   //method 2
    // return(props.isLoggedIn? 
    // <h2 className="Welcome-message">Welcome {props.username}</h2>:
    // <h2 className="login-prompt">Please log in to continue</h2>)

    //method 3
    const WelcomeMessage = <h2 
                            className="Welcome-message">Welcome {props.username}
                          </h2>
    const loginPrompt = <h2 
                        className="login-prompt">Please log in to continue
                        </h2>
    return(props.isLoggedIn ? WelcomeMessage: loginPrompt);

}
UserGreeting.PropsTypes = {
    isLoggedIn: PropsTypes.bool,
    username: PropsTypes.string,
}

UserGreeting.defaultProps = {
   isLoggedIn: false,
   username: "Guest",
}

export default UserGreeting