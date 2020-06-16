import React from 'react';
import './Issue.css'

function Issue({ title, url, body }) {
    return (
        <div>
            <div className="first-container">
                <div>
                    <div className="exclamation">❗</div>
                </div>
                <div>
                    <div className="title">{title}</div>
                    <div className="url">{url}</div>
                </div>
                {/* <div>{ body }</div> */}
            </div>
        </div>
    )
}

export default Issue;