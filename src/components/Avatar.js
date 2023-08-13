import React from 'react'

//user avatar component
const Avatar = props => {
    return (
        <img src={props.AvatarIcon} alt={props.AvatarAlt} className="user-avatar" />
    )
}
export default Avatar
