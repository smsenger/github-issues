import React from 'react';
import moment from 'moment';
import Label from './Label'
import ReactMarkdown from 'react-markdown/with-html';
import './IssueDetail.css'



function getUserLink(user) {
    return <a href={user.url}>{user.login}</a>
}

function getRelativeTime(time) {
    return moment.utc(time).fromNow();
}

function getMetaFragment(issue) {
    const { number, state, created_at, closed_at, user } = issue;

    if (state === 'open') {
        return <>{getUserLink(user)} opened this issue { getRelativeTime(created_at)} </>;
    } else {
        return <>was closed by { getUserLink(user)} {getRelativeTime(closed_at)}</>
    }
}

// function Assignee(props) {
//     const { name, assignee } = props.label;

//     {assignee ? <div className="labels" href={`https://api.github.com/repos/facebook/create-react-app/labels/issue:%20${name}%20`}>{assignee}</div> : <div>No one assigned</div>}


// }

function Detail(props) {
    const { title, number, body, name, assignee } = props.issue;
    // const { name, assignee } = props.label;
    const { issue } = props;
    return (

        <div>
            <div className="outer">
                <h1 className="title">{title} <span className="number">#{number}</span></h1>
                <div className="user-info">{getMetaFragment(issue)}</div>
            </div>

            <div className="main-content">
                <div>image</div>
                <div className="body-div">
                    <ReactMarkdown id="markdown" source={body} escapeHTML={false} />
                </div>
                <div className="sidebar">
                    <div className="div-border">Assignees</div>
                    {assignee ? <div className="labels" href={`https://api.github.com/repos/facebook/create-react-app/labels/issue:%20${name}%20`}>{assignee}</div> : <div>No one assigned</div>}

                        <div className="div-border">Labels</div>
                        <div className="url">{issue.labels.map(label => <Label label={label} key={label.id} />)}</div>
                        <div className="div-border">Projects</div>
                        <div className="div-border">Milestone</div>
                        <div className="div-border">Linked pull requests</div>
                        <div className="div-border">Notifications</div>
                        <div className="div-border">participant</div>
                </div>
            </div>
        </div>


    )
}

export default Detail;