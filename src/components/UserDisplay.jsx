import React from 'react'


export default function UserCard(props) {
    const { avatar_url, login, name, company, repos_url, blog, email, bio } = props.userInfo
    return (
        <div className="outer-div">
            <div className="user-image">
                <img src={avatar_url} alt="avatar" />
            </div>
            <div className="user-content">
                <h4>{login}: {name} </h4>
                <h5>{company}</h5>
                <p><a href={repos_url}>Repositories</a></p>
                <p className="bio">{bio}</p>
                <p>{email}</p>
                <p><a href={blog}>{blog}</a></p>
            </div>

        </div>
    )
}