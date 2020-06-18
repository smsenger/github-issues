import React from 'react';
import moment from 'moment';
import Label from './Label';
import './Issue.css'

function getUserLink(user) {
    return <a href={user.url}>{user.login}</a>
}

function getRelativeTime(time) {
    return moment.utc(time).fromNow();
}

function getMetaFragment(issue) {
    const { number, state, created_at, closed_at, user } = issue;

    if (state === 'open') {
        return <>#{ number } opened { getRelativeTime(created_at)} by { getUserLink(user)} </>;
    } else {
        return <>#{ number } was closed by { getUserLink(user)} {getRelativeTime(closed_at)}</>
    }
}


function Issue(props) {
    const { issue } = props;
    return (
        <div>
            <div className="first-container">

                <div>
                    <div className="exclamation">❗</div>
                </div>

                <div>
                    <div><a className="title" href={`/issue/${issue.number}`}>{issue.title}</a></div>
                    <div className="url">{issue.labels.map(label => <Label label={label} key={label.id} />)}</div>
                    <div className="url">{getMetaFragment(issue)}</div>
                </div>
                
            </div>
        </div>
    )
}

export default Issue;