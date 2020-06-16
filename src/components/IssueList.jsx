import React, { Component } from 'react'
import Issue from './Issue'
import Body from './Body'

export default class IssueList extends Component {
    constructor(props) {
        super(props);

        this.state = {
                issues: []
        }      
    }

    componentDidMount() {
        this.getIssues()
    }
    
    getIssues = () => {
        fetch('https://api.github.com/repos/facebook/create-react-app/issues')
            .then(res => res.json())
            .then(data => {
                this.setState({ 
                    issues: data
                });
                console.log(data)
            })
    }

    render() {
        return (
            <div>
                {this.state.issues.map((issue, index) => {
                    return(
                        <Issue title={issue.title} url={issue.url} body={issue.body}/>
                    )
                })}
            </div>
        )
    }
}