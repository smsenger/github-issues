import React from 'react';
import './Issue.css'

function Body({body}) {
    return (
        <div>
            <div className="first-container">
                <div>
                    <div className="exclamation"></div>
                </div>
                <div>
                    <div className="title">{ body }</div>
                </div>
            </div>
        </div>
    )
}

export default Body;