import React, { Component } from 'react'
import UserDisplay from './UserDisplay';
import './UserDetail.css'

export default class Users extends Component {
    constructor(props) {
        super(props);

        this.state = {
            user: {}
        }
    }

    componentDidMount() {
        fetch(`https://api.github.com/users/${this.props.match.params.login}`)
            .then(res => res.json())
            .then(data => {
                this.setState({
                    user: data,
                    loading: false
                })
            })
    }

    render() {
        if (this.state.loading) {
            return (<span> Loading Issue...</span>)
        }
        const { avatar_url, login, name, company, repos_url, blog, email, bio, followers_url, following_url } = this.state.user;
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
                <UserDisplay userInfo={this.state.user}/>
                    
                </div>
            </div>

        )
    }
}
