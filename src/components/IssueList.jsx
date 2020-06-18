import React, { Component } from 'react'
import Issue from './Issue'
import './IssueList.css'
import DropdownButton from 'react-bootstrap/DropdownButton'
import Dropdown from 'react-bootstrap/Dropdown'


export default class IssueList extends Component {
    constructor(props) {
        super(props);

        this.state = {
            issues: []
        }
    }

    componentDidMount() {
        fetch('https://api.github.com/repos/facebook/create-react-app/issues')
            .then(res => res.json())
            .then(data => {
                this.setState({
                    issues: data ? data : []
                });
                console.log(data)
            })
    }

    render() {
        return (    
            <div>
                <div className="App-header">
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
                <div className="contribute">
                    <p className="contribute-body">
                        👋<b>Want to contribute to facebook/create-react-app?</b><br></br>
                        If you have a bug or an idea, read the contributing guidelines before opening an issue.
                        If you're ready to tackle some open issues, we've collected some good first issues for you.
                    </p>
                </div>
                <div className="dropdowns-div">
                    <div className="dropdown-div">
                        <DropdownButton className="dropdownButton" id="dropdown-basic-button" title="Author">
                            <Dropdown.Item href="#/action-1">Action</Dropdown.Item>
                            <Dropdown.Item href="#/action-2">Another action</Dropdown.Item>
                            <Dropdown.Item href="#/action-3">Something else</Dropdown.Item>
                        </DropdownButton>
                    </div>
                    <div className="dropdown-div">
                        <DropdownButton className="dropdownButton" id="dropdown-basic-button" title="Label">
                            <Dropdown.Item href="#/action-1">Action</Dropdown.Item>
                            <Dropdown.Item href="#/action-2">Another action</Dropdown.Item>
                            <Dropdown.Item href="#/action-3">Something else</Dropdown.Item>
                        </DropdownButton>
                    </div>
                </div>
                {this.state.issues.map((issue) => {
                    return (
                        <Issue issue={issue} key={issue.id} />
                    )
                })}
            </div>
        )
    }
}