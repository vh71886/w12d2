import React from "react";

export default class Signup extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            username: "",
            email: "",
            password: "",
        }

        this.handleSubmit = this.handleSubmit.bind(this);
    }

    // Handles 3 types of inputs via type (username, email or password)
    // [type] -> square bracket makes sure type is evaluated before it is assigned to be the key
    handleInput(type) {
        return (e) => {
            this.setState({ [type]: e.target.value })
        }
    }

    handleSubmit(e) {
        e.preventDefault();
        this.props.createNewUser(this.state)
            .then( () => this.props.history.push('/chirps'));   // no access to history yet but the whole component will be wrapped in a route later
    }

    render() {
        return(
            <div className="session-form">
                <h2>Sign Up!</h2>
                <form >
                    <label>Username:
                        <input 
                            type="text"
                            value={this.state.username}
                            onChange={this.handleInput("username")} 
                        />
                    </label>

                    <label>Email:
                        <input 
                            type="text"
                            value={this.state.email}
                            onChange={this.handleInput("email")} 
                        />
                    </label>

                    <label>Password:
                        <input 
                            type="password"
                            value={this.state.password}
                            onChange={this.handleInput("password")} 
                        />
                    </label>

                    <button onClick={this.handleSubmit}>Sign Up</button>
                </form>
            </div>
        )
    }
}