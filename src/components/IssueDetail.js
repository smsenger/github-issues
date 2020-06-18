import React, { Component } from 'react';
import Detail from './Detail'
import './IssueDetail.css'


export default class IssueDetail extends Component {
    constructor(props) {
        super(props);

        this.state = {
            loading: true,
            detail: {},
            issues: []
        }
    }

    componentDidMount() {
        const { issueNumber } = this.props.match.params
        fetch(`https://api.github.com/repos/facebook/create-react-app/issues/${issueNumber}`)
            .then(res => res.json())
            .then(data => {
                this.setState({
                    detail: data,
                    loading: false,
                });
            }
            )
    }


    render() {
        if (this.state.loading) {
            return (<span> Loading Issue...</span>)
        }
        const { title, number, body, label } = this.state.detail;
        const {issues} = this.state;
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
                <Detail issue={this.state.detail}/> 
            </div>
        )

    }
}
