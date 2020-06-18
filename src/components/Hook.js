import React, { useState, useEffect } from 'react'
import Issue from './Issue'
import '../App.css'
import DropdownButton from 'react-bootstrap/DropdownButton'
import Dropdown from 'react-bootstrap/Dropdown'
import Nav from 'react-bootstrap/Nav'
import NavDropdown from 'react-bootstrap/NavDropdown'
import Navbar from 'react-bootstrap/Navbar'



function IssueList() {
    const [issues, setIssues] = useState([]);
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        fetch('https://api.github.com/repos/facebook/create-react-app/issues')
            .then(res => res.json())
            .then(data => {
                setIssues(data ? data : []);
            })


    })
    if (isLoading) {
        return <h2>Loading...</h2>
    }

    return (
        <div>
            {this.state.issues.map((issue) => { <Issue issue={issue} key={issue.id} /> })}
        </div>
    )

}