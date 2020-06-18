import React, { Component } from 'react'
import UserCard from './UserCard';
import './UserCard.css'

export default class Users extends Component {
    constructor(props) {
        super(props);

        this.state = {
            users: []
        }
    }

handleSubmit = (e) => {
    e.preventDefault();
    fetch(`https://api.github.com/users/${this.state.userName}`)
    .then(res => res.json())
    .then(data => {
        const newUsers = [ ...this.state.users, data]
        this.setState({
            users: newUsers,
            userName: '',
        })
    })
}

handleChange = (e) => {
    const value = e.target.value;
    this.setState({
        userName: value
    })
}

    render() {
        return (
            <div>
  <div className="header-div">
                    <h1 className="git-title">facebook / create-react-app</h1>
                    <div className="header-options">
                        <p className="header-option">Code</p>
                        <p className="header-option">Issues</p>
                        <p className="header-option">Pull Requests</p>
                        <p className="header-option">Discussions</p>
                        <p className="header-option">Projects</p>
                        <p className="header-option">Actions</p>
                        <p className="header-option">Security</p>
                        <p className="header-option">Pulse</p>
                        <p className="header-option">Community</p>
                    </div>
                </div>

            <div className="users-div">
                <form className="form" onSubmit={this.handleSubmit}>
                    <label htmlFor="username">Username  </label>
                    <input type="text" name="username" placeholder="Enter a username" onChange={this.handleChange} value={this.state.userName}></input>
                    <button type="submit">Search</button>
                </form>
                { this.state.users.length !== 0 && (
                <div>
                    <h4>User Information</h4>
                    { this.state.users.map((user, index) => {
                        return <UserCard key={index} userData={user}/>
                        })
                    }
                </div>
                )}
            </div>
            </div>

        )
    }
}
