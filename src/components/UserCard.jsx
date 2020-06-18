
import React from 'react'
import './UserCard.css'
import { Link } from 'react-router-dom'

export default function UserCard(props) {
    const { avatar_url, login, bio, blog, url } = props.userData
    return (
        <div className="outer-div">
            <div className="user-image">
                <img src={avatar_url} alt="avatar" />
            </div>
            <div className="user-content">
            <h4><Link to={ `/user/${login}`}>{login}</Link></h4>
                <p className="bio">{bio}</p>
                <p><a href={blog}>{blog}</a></p>
            </div>

        </div>
    )
}
